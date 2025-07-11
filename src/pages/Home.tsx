
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BarChart3, Shield, Zap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Простое создание тестов",
      description: "Интуитивный конструктор для создания тестов любой сложности"
    },
    {
      icon: Users,
      title: "Групповое тестирование",
      description: "Организация тестирования для больших групп участников"
    },
    {
      icon: BarChart3,
      title: "Детальная аналитика",
      description: "Подробные отчеты и статистика по результатам тестирования"
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Надежная защита персональных данных и результатов"
    },
    {
      icon: Zap,
      title: "Быстрая проверка",
      description: "Автоматическая проверка и мгновенные результаты"
    },
    {
      icon: Trophy,
      title: "Сертификация",
      description: "Выдача сертификатов и дипломов по результатам"
    }
  ];

  const benefits = [
    "Экономия времени на проверке",
    "Объективная оценка знаний",
    "Удобный доступ с любых устройств",
    "Автоматизация процесса обучения"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Современная платформа для 
                <span className="block text-blue-200">тестирования знаний</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Создавайте профессиональные тесты, проводите курсы и анализируйте результаты 
                с помощью нашего передового программного обеспечения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  Попробовать бесплатно
                </Button>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                    Посмотреть тарифы
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="h-4 bg-white/30 rounded-full w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded-full w-1/2"></div>
                  <div className="h-4 bg-white/30 rounded-full w-5/6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">1000+</div>
                      <div className="text-blue-200 text-sm">Тестов создано</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-white">50K+</div>
                      <div className="text-blue-200 text-sm">Участников</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный набор инструментов для эффективного тестирования и обучения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Почему выбирают ТестПро?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Наша платформа объединяет простоту использования с мощными возможностями, 
                предоставляя все необходимые инструменты для успешного тестирования.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-gray-600">Время работы</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Компаний</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5★</div>
                  <div className="text-gray-600">Рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Готовы начать тестирование?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Присоединяйтесь к тысячам организаций, которые уже используют ТестПро 
            для эффективного обучения и оценки знаний
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Начать бесплатно
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
