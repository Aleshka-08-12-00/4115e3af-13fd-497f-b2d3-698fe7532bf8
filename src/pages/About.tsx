
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb, Heart, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Качество",
      description: "Мы стремимся к совершенству в каждом продукте и решении"
    },
    {
      icon: Lightbulb,
      title: "Инновации",
      description: "Используем передовые технологии для создания лучших решений"
    },
    {
      icon: Heart,
      title: "Забота о клиентах",
      description: "Ваш успех - наша главная цель и приоритет"
    },
    {
      icon: Rocket,
      title: "Развитие",
      description: "Постоянно развиваемся и совершенствуем наши продукты"
    }
  ];

  const team = [
    {
      name: "Анна Иванова",
      role: "CEO & Основатель",
      description: "10+ лет опыта в EdTech индустрии",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Михаил Петров",
      role: "CTO",
      description: "Эксперт в области разработки ПО",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Елена Сидорова",
      role: "Head of Product",
      description: "Специалист по UX/UI дизайну",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            О компании ТестПро
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Мы создаем инновационные решения для образования и тестирования, 
            помогая тысячам организаций по всему миру достигать своих целей
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Сделать процесс обучения и оценки знаний простым, эффективным и доступным 
                для каждой организации. Мы верим, что качественное образование должно быть 
                доступно всем, независимо от размера компании или бюджета.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                За 5 лет работы мы помогли более чем 500 компаниям автоматизировать 
                процессы обучения и получить объективные результаты оценки знаний сотрудников.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pricing">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                    Начать работу
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Проведено тестов</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                  <div className="text-gray-600">Лет на рынке</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Принципы, которые направляют нас в создании лучших решений для наших клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионалы, которые делают ТестПро лучшей платформой для тестирования
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
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
            Готовы присоединиться к нам?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Станьте частью успешных компаний, которые доверяют ТестПро
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Начать бесплатно
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Задать вопрос
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
