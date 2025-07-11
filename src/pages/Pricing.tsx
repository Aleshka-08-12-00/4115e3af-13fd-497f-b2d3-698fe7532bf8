
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Базовый",
      description: "Идеально для индивидуальных преподавателей",
      price: "990",
      period: "месяц",
      popular: false,
      features: [
        { name: "До 50 тестов", included: true },
        { name: "До 100 участников", included: true },
        { name: "Базовая аналитика", included: true },
        { name: "Email поддержка", included: true },
        { name: "Экспорт результатов", included: true },
        { name: "Белый лейбл", included: false },
        { name: "API доступ", included: false },
        { name: "Приоритетная поддержка", included: false }
      ]
    },
    {
      name: "Профессиональный",
      description: "Для учебных заведений и компаний",
      price: "2990",
      period: "месяц",
      popular: true,
      features: [
        { name: "До 500 тестов", included: true },
        { name: "До 1000 участников", included: true },
        { name: "Расширенная аналитика", included: true },
        { name: "24/7 поддержка", included: true },
        { name: "Экспорт результатов", included: true },
        { name: "Белый лейбл", included: true },
        { name: "API доступ", included: true },
        { name: "Приоритетная поддержка", included: false }
      ]
    },
    {
      name: "Корпоративный",
      description: "Для крупных организаций",
      price: "По запросу",
      period: "",
      popular: false,
      features: [
        { name: "Неограниченные тесты", included: true },
        { name: "Неограниченные участники", included: true },
        { name: "Полная аналитика", included: true },
        { name: "24/7 поддержка", included: true },
        { name: "Экспорт результатов", included: true },
        { name: "Белый лейбл", included: true },
        { name: "API доступ", included: true },
        { name: "Приоритетная поддержка", included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "Можно ли изменить тарифный план?",
      answer: "Да, вы можете повысить или понизить тарифный план в любое время. Изменения вступят в силу с следующего периода оплаты."
    },
    {
      question: "Есть ли бесплатный пробный период?",
      answer: "Да, мы предоставляем 14-дневный бесплатный пробный период для всех тарифных планов без ограничений."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы принимаем банковские карты, банковские переводы и электронные кошельки. Для корпоративных клиентов доступна оплата по счету."
    },
    {
      question: "Предоставляете ли вы техническую поддержку?",
      answer: "Да, все клиенты получают техническую поддержку. Уровень поддержки зависит от выбранного тарифного плана."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Выберите подходящий тариф
          </h1>
          <p className="text-xl text-blue-100">
            Гибкие тарифные планы для организаций любого размера
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    {plan.price === "По запросу" ? (
                      <div className="text-3xl font-bold text-gray-900">По запросу</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-gray-900">
                          {plan.price} ₽
                        </div>
                        <div className="text-gray-600">/{plan.period}</div>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-900" : "text-gray-400"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700" 
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    size="lg"
                  >
                    {plan.price === "По запросу" ? "Связаться с нами" : "Выбрать план"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о наших тарифах
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Нужна консультация?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Наши специалисты помогут выбрать оптимальный тарифный план для ваших задач
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
