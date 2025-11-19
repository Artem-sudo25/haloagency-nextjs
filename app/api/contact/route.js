import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema (matches frontend)
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Invalid phone number'),
  interest: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data
    const validatedData = contactSchema.parse(body);

    // Map interest values to Russian labels
    const interestLabels = {
      website: 'Разработка сайта',
      advertising: 'Онлайн-реклама',
      analytics: 'Аналитика',
      package: 'Комплексное решение',
      other: 'Другое',
    };

    const interestLabel = interestLabels[validatedData.interest] || validatedData.interest;

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'HaloAgency <noreply@haloagency.cz>',
      to: process.env.CONTACT_EMAIL || 'info@haloagency.cz',
      replyTo: validatedData.email,
      subject: `Новая заявка: ${interestLabel}`,
      html: `
        <h2>Новая заявка с сайта HaloAgency</h2>

        <h3>Контактная информация:</h3>
        <ul>
          <li><strong>Имя:</strong> ${validatedData.name}</li>
          <li><strong>Email:</strong> ${validatedData.email}</li>
          <li><strong>Телефон:</strong> ${validatedData.phone}</li>
          <li><strong>Интересует:</strong> ${interestLabel}</li>
        </ul>

        ${validatedData.message ? `
          <h3>Сообщение:</h3>
          <p>${validatedData.message}</p>
        ` : ''}

        <hr />
        <p style="color: #666; font-size: 12px;">
          Заявка отправлена ${new Date().toLocaleString('ru-RU', {
            timeZone: 'Europe/Prague',
            dateStyle: 'full',
            timeStyle: 'short'
          })}
        </p>
      `,
      text: `
Новая заявка с сайта HaloAgency

Контактная информация:
- Имя: ${validatedData.name}
- Email: ${validatedData.email}
- Телефон: ${validatedData.phone}
- Интересует: ${interestLabel}

${validatedData.message ? `Сообщение:\n${validatedData.message}` : ''}

---
Заявка отправлена ${new Date().toLocaleString('ru-RU', {
  timeZone: 'Europe/Prague',
  dateStyle: 'full',
  timeStyle: 'short'
})}
      `,
    });

    // Optional: Send confirmation email to user
    if (process.env.SEND_CONFIRMATION === 'true') {
      await resend.emails.send({
        from: 'HaloAgency <noreply@haloagency.cz>',
        to: validatedData.email,
        subject: 'Спасибо за обращение - HaloAgency',
        html: `
          <h2>Здравствуйте, ${validatedData.name}!</h2>

          <p>Спасибо за обращение в HaloAgency. Мы получили вашу заявку и свяжемся с вами в течение 24 часов.</p>

          <h3>Ваша заявка:</h3>
          <ul>
            <li><strong>Интересует:</strong> ${interestLabel}</li>
            ${validatedData.message ? `<li><strong>Сообщение:</strong> ${validatedData.message}</li>` : ''}
          </ul>

          <p>С уважением,<br />Команда HaloAgency</p>

          <hr />
          <p style="color: #666; font-size: 12px;">
            Если у вас возникли вопросы, ответьте на это письмо или напишите нам на info@haloagency.cz
          </p>
        `,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Заявка успешно отправлена',
        data: {
          id: emailData.id,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Ошибка валидации данных',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    // Log error (in production, use proper logging service)
    console.error('Contact form error:', error);

    // Handle Resend API errors
    if (error.name === 'ResendError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Ошибка при отправке письма',
        },
        { status: 500 }
      );
    }

    // Generic error
    return NextResponse.json(
      {
        success: false,
        message: 'Произошла ошибка. Пожалуйста, попробуйте позже.',
      },
      { status: 500 }
    );
  }
}
