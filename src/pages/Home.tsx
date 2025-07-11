
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BarChart3, Shield, Zap, Trophy, Star, ArrowRight, Play, TrendingUp, Clock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Простое создание тестов",
      description: "Интуитивный конструктор для создания тестов любой сложности за минуты"
    },
    {
      icon: Users,
      title: "Групповое тестирование",
      description: "Организация тестирования для больших групп участников с автоматическим распределением"
    },
    {
      icon: BarChart3,
      title: "Продвинутая аналитика",
      description: "Детальные отчеты, графики прогресса и интеллектуальные рекомендации"
    },
    {
      icon: Shield,
      title: "Безопасность данных",
      description: "Надежная защита персональных данных с шифрованием корпоративного уровня"
    },
    {
      icon: Zap,
      title: "Мгновенные результаты",
      description: "Автоматическая проверка и моментальное получение результатов тестирования"
    },
    {
      icon: Trophy,
      title: "Сертификация",
      description: "Выдача персонализированных сертификатов и дипломов с цифровой подписью"
    }
  ];

  const benefits = [
    "Экономия времени на проверке до 90%",
    "Объективная оценка знаний без предвзятости",
    "Удобный доступ с любых устройств 24/7",
    "Автоматизация всего процесса обучения",
    "Интеграция с популярными LMS системами",
    "Поддержка множественных форматов вопросов"
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "HR-директор, ТехКорп",
      text: "ТестПро кардинально изменил наш подход к обучению сотрудников. Экономим до 15 часов в неделю!",
      rating: 5
    },
    {
      name: "Михаил Иванов",
      role: "Преподаватель, УниверситетПлюс",
      text: "Студенты в восторге от интерактивных тестов. Вовлеченность выросла на 200%.",
      rating: 5
    },
    {
      name: "Елена Сидорова",
      role: "Менеджер обучения, МедиаГрупп",
      text: "Интуитивный интерфейс и мощная аналитика - именно то, что нам было нужно.",
      rating: 5
    }
  ];

  const stats = [
    { number: "1M+", label: "Тестов проведено", icon: CheckCircle },
    { number: "100K+", label: "Активных пользователей", icon: Users },
    { number: "500+", label: "Довольных компаний", icon: Trophy },
    { number: "99.9%", label: "Время работы", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="gradient-bg py-20 lg:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <Star className="h-4 w-4 text-yellow-300 mr-2" />
                <span className="text-white text-sm font-medium">Рейтинг 4.9/5 ⭐⭐⭐⭐⭐</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Революционная платформа для 
                <span className="block text-blue-200 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  тестирования знаний
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Создавайте профессиональные тесты, проводите интерактивные курсы 
                и получайте детальную аналитику с помощью ИИ-powered платформы нового поколения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <Play className="h-5 w-5 mr-2" />
                  Попробовать бесплатно
                </Button>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 backdrop-blur-sm">
                    Узнать больше
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Настройка за 5 минут</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>Доступно везде</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-white/40 rounded-full w-32"></div>
                      <div className="h-8 w-8 bg-green-400 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="h-3 bg-white/30 rounded-full w-48"></div>
                    <div className="h-3 bg-white/30 rounded-full w-36"></div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-white/25 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-bold text-white">1M+</div>
                        <div className="text-blue-200 text-sm">Тестов создано</div>
                      </div>
                      <div className="bg-white/25 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-bold text-white">100K+</div>
                        <div className="text-blue-200 text-sm">Участников</div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-6">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-white text-sm self-center ml-2">+500 компаний доверяют нам</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 gradient-bg rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
              <span className="text-blue-600 font-medium">Возможности платформы</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Все инструменты в одном месте
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный набор профессиональных инструментов для создания, проведения 
              и анализа тестов с использованием искусственного интеллекта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Что говорят наши клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 компаний доверяют ТестПро свои образовательные процессы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Почему выбирают ТестПро?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Наша платформа объединяет простоту использования с мощными возможностями ИИ, 
                предоставляя все необходимые инструменты для революционного подхода к тестированию.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-lg text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Время работы</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Компаний</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">AI</div>
                  <div className="text-gray-600">Аналитика</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="gradient-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Готовы революционизировать тестирование?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Присоединяйтесь к тысячам организаций, которые уже используют ТестПро 
            для трансформации процессов обучения и оценки знаний
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              <Play className="h-5 w-5 mr-2" />
              Начать бесплатно
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 backdrop-blur-sm">
                Связаться с нами
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm">
            Бесплатная пробная версия • Без привязки карты • Настройка за 5 минут
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
