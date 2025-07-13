import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <Icon name="Rocket" size={20} className="text-white" />
              </div>
              <span className="text-xl font-inter font-bold text-gray-900">
                SkillPlatform
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-600">
                Войти
              </Button>
              <Button className="bg-brand-blue hover:bg-blue-600 text-white">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-inter font-bold text-gray-900 mb-6 animate-fade-in">
            Обучайся и зарабатывай <br />
            <span className="text-brand-blue">одновременно</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-open-sans">
            Платформа где ты изучаешь навыки через реальные заказы и возвращаешь
            деньги за курс при выполнении проектов
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Card className="w-full sm:w-80 p-8 bg-white border-2 border-brand-blue shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 animate-scale-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-2">
                  Я исполнитель
                </h3>
                <p className="text-gray-600 font-open-sans mb-4">
                  Хочу изучать навыки и выполнять заказы
                </p>
                <Button className="w-full bg-brand-blue hover:bg-blue-600 text-white">
                  Начать обучение
                </Button>
              </div>
            </Card>

            <Card className="w-full sm:w-80 p-8 bg-white border-2 border-brand-green shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 animate-scale-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-inter font-bold text-gray-900 mb-2">
                  Я заказчик
                </h3>
                <p className="text-gray-600 font-open-sans mb-4">
                  Нужно найти исполнителя для проекта
                </p>
                <Button className="w-full bg-brand-green hover:bg-green-600 text-white">
                  Создать заказ
                </Button>
              </div>
            </Card>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} className="text-brand-green" />
              </div>
              <h4 className="font-inter font-semibold text-gray-900 mb-2">
                Возврат денег за курс
              </h4>
              <p className="text-gray-600 font-open-sans">
                За каждый выполненный заказ возвращается часть стоимости
                обучения
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" size={24} className="text-brand-blue" />
              </div>
              <h4 className="font-inter font-semibold text-gray-900 mb-2">
                Геймификация
              </h4>
              <p className="text-gray-600 font-open-sans">
                Уровни, бейджи и достижения за активность и качество работы
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-brand-red" />
              </div>
              <h4 className="font-inter font-semibold text-gray-900 mb-2">
                Контроль качества
              </h4>
              <p className="text-gray-600 font-open-sans">
                Каждая работа проверяется куратором перед отправкой заказчику
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">
              Популярные курсы
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Изучай востребованные навыки и сразу применяй на практике
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Веб-дизайн",
                description: "Создание современных интерфейсов и UX/UI дизайн",
                price: "15,000₽",
                duration: "8 недель",
                studentsCount: 234,
                returnProgress: 40,
                level: "Начинающий",
              },
              {
                title: "Frontend разработка",
                description: "React, TypeScript и современные инструменты",
                price: "25,000₽",
                duration: "12 недель",
                studentsCount: 156,
                returnProgress: 60,
                level: "Средний",
              },
              {
                title: "Мобильная разработка",
                description: "React Native и создание iOS/Android приложений",
                price: "30,000₽",
                duration: "16 недель",
                studentsCount: 89,
                returnProgress: 20,
                level: "Продвинутый",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-brand-blue/10 text-brand-blue"
                    >
                      {course.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-inter font-bold text-gray-900">
                        {course.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-inter font-bold text-gray-900">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-open-sans mb-4">
                    {course.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Возврат при выполнении заказов</span>
                      <span className="font-semibold">
                        {course.returnProgress}%
                      </span>
                    </div>
                    <Progress value={course.returnProgress} className="h-2" />

                    <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={16} />
                        <span>{course.studentsCount} студентов</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-brand-blue hover:bg-blue-600 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Orders Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">
              Активные заказы
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Реальные проекты от заказчиков для отработки навыков
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Дизайн лендинга для стартапа",
                description:
                  "Нужен современный дизайн главной страницы для IT-продукта",
                budget: "15,000₽",
                deadline: "5 дней",
                category: "Дизайн",
                difficulty: "Средний",
                applicants: 8,
              },
              {
                title: "Создание React компонентов",
                description:
                  "Разработка переиспользуемых UI компонентов для веб-приложения",
                budget: "25,000₽",
                deadline: "7 дней",
                category: "Разработка",
                difficulty: "Продвинутый",
                applicants: 3,
              },
              {
                title: "Адаптивная верстка сайта",
                description:
                  "HTML/CSS верстка дизайн-макета с адаптацией под мобильные",
                budget: "12,000₽",
                deadline: "4 дня",
                category: "Верстка",
                difficulty: "Начинающий",
                applicants: 15,
              },
              {
                title: "Мобильное приложение для доставки",
                description:
                  "React Native приложение с интеграцией карт и платежей",
                budget: "45,000₽",
                deadline: "14 дней",
                category: "Мобильная разработка",
                difficulty: "Эксперт",
                applicants: 2,
              },
            ].map((order, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-102 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="outline"
                      className={`${
                        order.difficulty === "Начинающий"
                          ? "border-brand-green text-brand-green"
                          : order.difficulty === "Средний"
                            ? "border-brand-blue text-brand-blue"
                            : order.difficulty === "Продвинутый"
                              ? "border-brand-orange text-brand-orange"
                              : "border-brand-red text-brand-red"
                      }`}
                    >
                      {order.difficulty}
                    </Badge>
                    <div className="text-right">
                      <div className="text-xl font-inter font-bold text-gray-900">
                        {order.budget}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.deadline}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-inter font-bold text-gray-900">
                    {order.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-open-sans mb-4">
                    {order.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gray-100 text-gray-700">
                      {order.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Icon name="Users" size={16} />
                      <span>{order.applicants} откликов</span>
                    </div>
                  </div>

                  <Button className="w-full bg-brand-green hover:bg-green-600 text-white">
                    Взять заказ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
            >
              Показать все заказы
            </Button>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-inter font-bold text-gray-900 mb-4">
              Система достижений
            </h2>
            <p className="text-lg text-gray-600 font-open-sans">
              Прокачивай уровень, получай бейджи и получай бонусы
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* User Progress Card */}
            <Card className="p-8 bg-white shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-inter font-bold text-xl">
                      42
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-inter font-bold text-gray-900">
                      Александр Иванов
                    </CardTitle>
                    <p className="text-gray-600 font-open-sans">
                      Fullstack разработчик • Уровень 42
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-open-sans text-gray-600">
                        До следующего уровня
                      </span>
                      <span className="text-sm font-inter font-semibold text-gray-900">
                        850 / 1000 XP
                      </span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-inter font-bold text-brand-blue mb-1">
                        23
                      </div>
                      <div className="text-xs text-gray-600 font-open-sans">
                        Заказов выполнено
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-inter font-bold text-brand-green mb-1">
                        18,500₽
                      </div>
                      <div className="text-xs text-gray-600 font-open-sans">
                        Возвращено
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-inter font-bold text-gray-900">
                Последние достижения
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: "Zap",
                    title: "Быстрый старт",
                    description: "Первый заказ за 24 часа",
                    color: "bg-brand-blue",
                    earned: true,
                  },
                  {
                    icon: "Target",
                    title: "Точно в срок",
                    description: "10 заказов в срок",
                    color: "bg-brand-green",
                    earned: true,
                  },
                  {
                    icon: "Star",
                    title: "5 звезд",
                    description: "Средний рейтинг 5.0",
                    color: "bg-yellow-400",
                    earned: false,
                  },
                  {
                    icon: "Crown",
                    title: "Мастер",
                    description: "100 заказов выполнено",
                    color: "bg-purple-500",
                    earned: false,
                  },
                ].map((badge, index) => (
                  <Card
                    key={index}
                    className={`p-4 ${badge.earned ? "bg-white border-2 border-gray-300" : "bg-gray-50 border border-gray-200"}`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                          badge.earned
                            ? `${badge.color} text-white`
                            : "bg-gray-300 text-gray-500"
                        }`}
                      >
                        <Icon name={badge.icon as any} size={20} />
                      </div>
                      <h4
                        className={`font-inter font-semibold text-sm mb-1 ${badge.earned ? "text-gray-900" : "text-gray-500"}`}
                      >
                        {badge.title}
                      </h4>
                      <p
                        className={`text-xs font-open-sans ${badge.earned ? "text-gray-600" : "text-gray-400"}`}
                      >
                        {badge.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* XP Breakdown */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-inter font-bold text-gray-900 mb-4">
              Как получить XP
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-brand-green"
                  />
                </div>
                <div>
                  <div className="font-inter font-semibold text-gray-900">
                    +50 XP
                  </div>
                  <div className="text-sm text-gray-600 font-open-sans">
                    За выполненный заказ
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-brand-blue" />
                </div>
                <div>
                  <div className="font-inter font-semibold text-gray-900">
                    +30 XP
                  </div>
                  <div className="text-sm text-gray-600 font-open-sans">
                    За досрочное выполнение
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-brand-orange"
                  />
                </div>
                <div>
                  <div className="font-inter font-semibold text-gray-900">
                    +20 XP
                  </div>
                  <div className="text-sm text-gray-600 font-open-sans">
                    За помощь в чате
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-inter font-bold text-brand-blue mb-2">
                1,234
              </div>
              <div className="text-gray-600 font-open-sans">Студентов</div>
            </div>
            <div>
              <div className="text-3xl font-inter font-bold text-brand-green mb-2">
                567
              </div>
              <div className="text-gray-600 font-open-sans">
                Выполненных заказов
              </div>
            </div>
            <div>
              <div className="text-3xl font-inter font-bold text-brand-orange mb-2">
                89%
              </div>
              <div className="text-gray-600 font-open-sans">Возврат денег</div>
            </div>
            <div>
              <div className="text-3xl font-inter font-bold text-brand-red mb-2">
                4.9
              </div>
              <div className="text-gray-600 font-open-sans">
                Средний рейтинг
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                  <Icon name="Rocket" size={20} className="text-white" />
                </div>
                <span className="text-xl font-inter font-bold">
                  SkillPlatform
                </span>
              </div>
              <p className="text-gray-400 font-open-sans">
                Обучайся и зарабатывай одновременно
              </p>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>Курсы</li>
                <li>Преподаватели</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">Работа</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>Заказы</li>
                <li>Исполнители</li>
                <li>Рейтинги</li>
              </ul>
            </div>
            <div>
              <h4 className="font-inter font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400 font-open-sans">
                <li>FAQ</li>
                <li>Чат</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 SkillPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
