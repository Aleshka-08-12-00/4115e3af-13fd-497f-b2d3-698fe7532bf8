
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, BarChart3, Shield, Zap, Trophy, Star, ArrowRight, Play, TrendingUp, Clock, Globe, Brain, Sparkles, Target, Award, MessageSquare, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "ИИ-powered создание тестов",
      description: "Искусственный интеллект автоматически генерирует вопросы и анализирует результаты для максимальной эффективности"
    },
    {
      icon: Users,
      title: "Групповое тестирование",
      description: "Организация тестирования для больших групп участников с автоматическим распределением"
    },
    {
      icon: BarChart3,
      title: "Умная аналитика",
      description: "ИИ анализирует результаты и предоставляет детальные отчеты с персональными рекомендациями"
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
    "ИИ-анализ для объективной оценки знаний",
    "Удобный доступ с любых устройств 24/7",
    "Автоматизация всего процесса обучения",
    "Интеграция с популярными LMS системами",
    "Поддержка множественных форматов вопросов"
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "HR-директор, ТехКорп",
      text: "ТестПро кардинально изменил наш подход к обучению сотрудников. ИИ-анализ показывает невероятные результаты!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Михаил Иванов",
      role: "Преподаватель, УниверситетПлюс",
      text: "Студенты в восторге от интерактивных тестов. Вовлеченность выросла на 200%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Елена Сидорова",
      role: "Менеджер обучения, МедиаГрупп",
      text: "Интуитивный интерфейс и мощная ИИ-аналитика - именно то, что нам было нужно.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "1M+", label: "Тестов проведено", icon: CheckCircle },
    { number: "100K+", label: "Активных пользователей", icon: Users },
    { number: "500+", label: "Довольных компаний", icon: Trophy },
    { number: "99.9%", label: "Время работы", icon: TrendingUp }
  ];

  const partners = [
    "Сбербанк", "Яндекс", "Mail.ru", "Ростелеком", "Газпром", "Лукойл", 
    "ВТБ", "Альфа-Банк", "Тинькофф", "МегаФон", "Билайн", "МТС",
    "РЖД", "Росатом", "Ростех", "Норникель", "РУСАЛ", "Роснефть"
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="gradient-bg py-20 lg:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
                <Brain className="h-5 w-5 text-yellow-300 mr-3" />
                <Star className="h-4 w-4 text-yellow-300 mr-2" />
                <span className="text-white text-sm font-medium">Powered by AI • Рейтинг 4.9/5</span>
                <Sparkles className="h-4 w-4 text-yellow-300 ml-2" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Будущее тестирования с 
                <span className="block text-transparent bg-gradient-to-r from-yellow-200 via-blue-200 to-white bg-clip-text">
                  искусственным интеллектом
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Создавайте умные тесты, получайте ИИ-анализ результатов и революционизируйте 
                процесс обучения с помощью передовых технологий машинного обучения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-yellow-50 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1 hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  Попробовать ИИ бесплатно
                </Button>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 backdrop-blur-sm">
                    Узнать об ИИ
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-blue-100">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>ИИ настройка за 2 минуты</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>Умный анализ 24/7</span>
                </div>
              </div>
            </div>

            {/* Interactive Demo Preview */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">ИИ Тест-Конструктор</div>
                          <div className="text-blue-200 text-sm">Генерация вопросов</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                        <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-600"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white/25 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-white font-medium mb-3">Вопрос 1 из 10</div>
                      <div className="text-blue-100 mb-4">Какой принцип лежит в основе машинного обучения?</div>
                      <div className="space-y-2">
                        <div className="bg-white/20 rounded-lg p-3 text-blue-100 hover:bg-white/30 transition-colors cursor-pointer">
                          А) Обучение на данных
                        </div>
                        <div className="bg-green-400/30 rounded-lg p-3 text-white border border-green-400/50">
                          Б) Автоматическая оптимизация ✓
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 text-blue-100">
                          В) Программирование правил
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/25 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-bold text-white">87%</div>
                        <div className="text-blue-200 text-sm">ИИ точность</div>
                      </div>
                      <div className="bg-white/25 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-2xl font-bold text-white">2.3с</div>
                        <div className="text-blue-200 text-sm">Анализ ответа</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Running Line */}
      <section className="bg-white py-6 border-b border-blue-100 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8 text-gray-600 font-medium text-lg">
                {partner}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-500 text-sm">Более 500 компаний доверяют нашим ИИ-технологиям</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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

      {/* AI Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-4">
              <Brain className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">Искусственный интеллект в действии</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Умные тесты будущего
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Наш ИИ автоматически анализирует ответы, выявляет паттерны обучения и предоставляет 
              персонализированные рекомендации для каждого участника
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Адаптивное тестирование</h3>
                    <p className="text-sm text-gray-600">ИИ подбирает сложность вопросов</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    "Анализ показывает высокий уровень в области математики. 
                    Рекомендуем усложнить задания на 20%"
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Умные рекомендации</h3>
                    <p className="text-sm text-gray-600">Персональный план развития</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    "Слабые места: логические задачи. Рекомендуем пройти курс 
                    'Развитие логического мышления'"
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ИИ-Анализ результатов</h3>
                <p className="text-gray-600">Мгновенная обработка данных</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Математика</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="w-20 h-2 bg-green-200 rounded-full">
                      <div className="w-full h-full bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Логика</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">78%</div>
                    <div className="w-20 h-2 bg-blue-200 rounded-full">
                      <div className="w-4/5 h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Креативность</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">85%</div>
                    <div className="w-20 h-2 bg-yellow-200 rounded-full">
                      <div className="w-5/6 h-full bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
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
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group">
                <CardHeader>
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
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

      {/* Testimonials Section with Photos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Довольные клиенты рекомендуют
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 компаний доверяют ТестПро свои образовательные процессы и остаются довольны результатами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white group">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform"
                    />
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
                Почему выбирают наш ИИ?
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
                <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Время работы</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">ИИ поддержка</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Компаний</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform">
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
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
            <Brain className="h-5 w-5 text-yellow-300 mr-3" />
            <span className="text-white font-medium">Присоединяйтесь к ИИ-революции</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Готовы к умному тестированию?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Присоединяйтесь к тысячам организаций, которые уже используют ИИ-powered ТестПро 
            для трансформации процессов обучения и оценки знаний
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-yellow-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all hover:scale-105">
              <Brain className="h-5 w-5 mr-2" />
              Попробовать ИИ бесплатно
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 backdrop-blur-sm">
                Связаться с нами
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm">
            Бесплатная ИИ-демонстрация • Без привязки карты • Настройка за 2 минуты
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
