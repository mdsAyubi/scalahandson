/*
  Lazy val: Initialized onl when first usage is made...
 */

class Country{
  val name = {
    println("Initialzing name")
    "India"
  }
  lazy val name2 = {
    println("Init name 2...")
    "Bharat"
  }
}

val c = new Country
c.name2


//String interpolation : check StringContext class
val num = 1
val den = 2
s"numerator / denominator: $num/$den" //s is the quasi quotes
val list = List(1,2,3)
s" second element is ${list(1)}"

//Higher order functions

val inc = (n: Int) => n + 1
def add(num:Int, f: Int => Int) = f(num)

add(1, inc)
add(1, x => x + 1)

def performOps(num:Int, f: Int => Int,  g:Int=>Int, h:Int=>Int) = {
  h(g(f(num)))
}

performOps(1, x=>x+1, x => x+2, x=>x)

def performOperation[T](operand1:T, operand2:T, operator:(T, T)=>T) = {
  operator(operand1, operand2)
}

performOperation[Int](1,1,(x,y)=>x+y)

List("Hello world", "namastey india","greetings australia").map(x => x.charAt(0))

val l = (1 to 1000).toList
l.filter(x => math.sqrt(x)%1 == 0)

def sum(ls:List[Int]) = ls.reduce((a,b) => a + b)
sum(List(1,2,3,4))

def op[T](ls:List[T], reduceFunction:(T, T)=>T) = ls.reduce(reduceFunction)

op[Int](List(1,2,3), (x,y)=>x*y)
op[String](List("a","ab","abc"), reduceFunction = (x, y) => if (x.length > y.length) x else y)

//Tasks
val listString = List("1","2","3","4","5")
val listNum = listString.map(x => x.toInt)
val listSquare = listNum.map(x => x*x)
val listFiltered = listNum.filter(x => x % 2 == 1)
val listDivisibleBy3 = listNum.filter(x => x % 3 == 0)

case class Player(name: String, country: String)

case class Team(players: List[Player])

val players = List(Player("dhoni", "ind"), Player("anderson", "eng")
  , Player("broad", "eng")
  , Player("kohli", "ind"), Player("steyn", "sa"))


object Team {
  def getTeams(ls: List[Player]): List[Team] = {
    val countrytoPlayerMap:Map[String, List[Player]] = ls.groupBy(player => player.country)
    println(countrytoPlayerMap)
    val playerLists = countrytoPlayerMap.values
    val teamList = playerLists.map(playerList => Team(playerList)).toList
    println(teamList)
    teamList
  }
}

Team.getTeams(players)

