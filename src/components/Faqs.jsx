import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is Big Up?',
      answer:
        'Big Up is a positivity-focused social media app designed specifically for teenagers and young adults in the UK. Our aim is to create a supportive and uplifting online environment where users can celebrate the good in each other and foster genuine connections with their peers.',
    },
    {
      question: 'How does Big Up work?',
      answer:
        'Users can answer fun and positive questions about their peers, like "Who has the best smile?" or "Who\'s the most supportive friend?". Big Up also features customizable profiles, unique badges and rewards, and exclusive events and challenges to keep the community engaged and connected.',
    },
    {
      question: 'Is Big Up free to use?',
      answer:
        'Yes, Big Up is completely free to download and 99% of the app is free. You can find out who selected you as their response by inviting your friends or buy buying coins.',
    },
  ],
  [
    {
      question: 'How can I get in touch with Big Up\'s support team?',
      answer:
        'If you have any questions, concerns, or feedback, feel free to reach out to our support team at support@bigupapp.com. We\'re always here to help and ensure you have the best possible experience on our platform.',
    },
    {
      question: 'How do I delete my Big Up account?',
      answer:
        'If you wish to delete your Big Up account, please contact our support team at support@bigupapp.com with your account details, and we\'ll guide you through the process. Remember, we\'re always here to help with any concerns or issues you may have.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:support@bigupapp.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
