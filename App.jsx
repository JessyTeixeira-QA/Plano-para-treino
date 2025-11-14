import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Clock, Target, Calendar, User, Heart, Zap, Trophy } from 'lucide-react'
import './App.css'

function App() {
  const [currentDay, setCurrentDay] = useState(1)

  const userProfile = {
    name: "Mulher Iniciante",
    age: 28,
    height: "165cm",
    weight: "54kg",
    goal: "Perda de peso",
    frequency: "7 vezes por semana",
    duration: "15-30 minutos",
    location: "Em casa"
  }

  const workoutDays = [
    {
      day: 1,
      title: "Cardio e Corpo Total",
      focus: "Aquecimento cardiovascular",
      exercises: [
        { name: "Polichinelo", duration: "45s", description: "Salte abrindo as pernas e elevando os braços" },
        { name: "Marcha Estacionária", duration: "45s", description: "Levante os joelhos alternadamente" },
        { name: "Escalador Cruzado", duration: "45s", description: "Posição de prancha, joelhos ao peito alternados" }
      ]
    },
    {
      day: 2,
      title: "Força e Core",
      focus: "Fortalecimento do abdômen",
      exercises: [
        { name: "Agachamento", duration: "45s", description: "Abaixe o quadril como se fosse sentar" },
        { name: "Prancha", duration: "30-45s", description: "Mantenha o corpo reto como uma tábua" },
        { name: "Abdominal Reverso", duration: "45s", description: "Traga os joelhos em direção ao peito" }
      ]
    },
    {
      day: 3,
      title: "Cardio e Pernas",
      focus: "Queima de calorias e pernas",
      exercises: [
        { name: "Burpee Adaptado", duration: "45s", description: "Versão simplificada sem salto" },
        { name: "Agachamento", duration: "45s", description: "Foque na técnica correta" },
        { name: "Polichinelo", duration: "45s", description: "Mantenha o ritmo constante" }
      ]
    },
    {
      day: 4,
      title: "Core e Glúteos",
      focus: "Fortalecimento posterior",
      exercises: [
        { name: "Prancha", duration: "30-45s", description: "Contraia o abdômen" },
        { name: "Elevação de Quadril", duration: "45s", description: "Contraia os glúteos no topo" },
        { name: "Abdominal Reverso", duration: "45s", description: "Movimento controlado" }
      ]
    },
    {
      day: 5,
      title: "Cardio e Corpo Total",
      focus: "Alta intensidade",
      exercises: [
        { name: "Marcha Estacionária", duration: "45s", description: "Aumente a intensidade" },
        { name: "Escalador Cruzado", duration: "45s", description: "Movimento rápido e controlado" },
        { name: "Burpee Adaptado", duration: "45s", description: "Mantenha a forma correta" }
      ]
    },
    {
      day: 6,
      title: "Força e Pernas",
      focus: "Fortalecimento inferior",
      exercises: [
        { name: "Agachamento", duration: "45s", description: "Foque na profundidade" },
        { name: "Elevação de Quadril", duration: "45s", description: "Pause no topo" },
        { name: "Prancha", duration: "30-45s", description: "Respiração controlada" }
      ]
    },
    {
      day: 7,
      title: "Atividade Leve",
      focus: "Recuperação ativa",
      exercises: [
        { name: "Caminhada Leve", duration: "15-30min", description: "Ritmo confortável" },
        { name: "Alongamento", duration: "10-15min", description: "Foque nos músculos trabalhados" },
        { name: "Respiração", duration: "5min", description: "Relaxamento e mindfulness" }
      ]
    }
  ]

  const tips = [
    "Sempre aqueça por 5 minutos antes de começar",
    "Finalize com 5 minutos de alongamento",
    "Mantenha-se hidratada durante todo o treino",
    "Escute seu corpo e descanse quando necessário",
    "A alimentação é 70% do sucesso na perda de peso",
    "Seja consistente - resultados vêm com o tempo"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Plano de Treino Personalizado
              </h1>
              <p className="text-gray-600">Seu caminho para uma vida mais saudável</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Card */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Perfil da Usuária
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{userProfile.age}</div>
                <div className="text-sm text-gray-600">anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{userProfile.height}</div>
                <div className="text-sm text-gray-600">altura</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{userProfile.weight}</div>
                <div className="text-sm text-gray-600">peso</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-600">7x</div>
                <div className="text-sm text-gray-600">por semana</div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                <Target className="h-3 w-3 mr-1" />
                {userProfile.goal}
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                <Clock className="h-3 w-3 mr-1" />
                {userProfile.duration}
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Zap className="h-3 w-3 mr-1" />
                Iniciante
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="workout" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger value="workout" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Treinos
            </TabsTrigger>
            <TabsTrigger value="tips" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              <Trophy className="h-4 w-4 mr-2" />
              Dicas
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
              <Heart className="h-4 w-4 mr-2" />
              Progresso
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workout" className="space-y-6">
            {/* Day Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
              {workoutDays.map((workout) => (
                <Button
                  key={workout.day}
                  variant={currentDay === workout.day ? "default" : "outline"}
                  onClick={() => setCurrentDay(workout.day)}
                  className={`${
                    currentDay === workout.day
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "hover:bg-pink-50"
                  }`}
                >
                  Dia {workout.day}
                </Button>
              ))}
            </div>

            {/* Current Workout */}
            {workoutDays.map((workout) => (
              currentDay === workout.day && (
                <Card key={workout.day} className="border-0 shadow-lg bg-white/80 backdrop-blur">
                  <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-t-lg">
                    <CardTitle className="text-xl">Dia {workout.day}: {workout.title}</CardTitle>
                    <CardDescription className="text-pink-100">{workout.focus}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">Estrutura do Treino:</h4>
                        <div className="text-sm text-yellow-700">
                          <p>• Aquecimento: 5 minutos</p>
                          <p>• Circuito: 2-3 rodadas dos exercícios abaixo</p>
                          <p>• Alongamento: 5 minutos</p>
                        </div>
                      </div>
                      
                      <div className="grid gap-4">
                        {workout.exercises.map((exercise, index) => (
                          <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 border border-pink-200">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-gray-800">{exercise.name}</h4>
                              <Badge variant="outline" className="bg-white">
                                {exercise.duration}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm">{exercise.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle>Dicas Importantes</CardTitle>
                <CardDescription className="text-purple-100">
                  Siga essas orientações para maximizar seus resultados
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-1 mt-1">
                        <Trophy className="h-3 w-3" />
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle>Acompanhe seu Progresso</CardTitle>
                <CardDescription className="text-green-100">
                  Monitore sua evolução e celebre suas conquistas
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-3">Como Medir o Progresso:</h4>
                    <div className="space-y-2 text-sm text-green-700">
                      <p>• Tire fotos semanais (frente, lado, costas)</p>
                      <p>• Meça a cintura, quadril e braços mensalmente</p>
                      <p>• Anote como se sente após cada treino</p>
                      <p>• Observe melhorias na resistência e força</p>
                      <p>• Monitore a qualidade do sono e energia</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3">Metas Semanais:</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <p>• Semana 1-2: Foque na consistência e técnica</p>
                      <p>• Semana 3-4: Aumente gradualmente a intensidade</p>
                      <p>• Semana 5-6: Adicione mais repetições ou tempo</p>
                      <p>• Semana 7-8: Avalie resultados e ajuste o plano</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-600">
            Lembre-se: a consistência é a chave para o sucesso. Você consegue! 💪
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

