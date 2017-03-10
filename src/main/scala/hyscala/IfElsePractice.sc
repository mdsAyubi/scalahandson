

val a = 42
val b = 42L
val c = 42f
val d:Double = a*b*c
val e:Short = 42
val f:Byte = 42
val g = 0x2A

////OO/////
class Animal(name:String, legs:Int) {
  require(legs> 0, "Legs should be greather than 0");
  override def toString: String = "the animal"

  def this() = this("Animal", 4)

  def this(name:String) = this(name, 4)

  val hasMoreLegs = legs>4

  println("I am animal")

  if(math.random > 0.5)
    println("I am male")
  else
    println("I am female")
}

//Fields
class Country{
  val planet = "Earth"
}

///////Methods
def myMethod(n:Int, m:Int) = n + m
def double(n:Int): Int = n*2

//Class methods
class Number(val i:Int){
  def add(num:Number) = new Number(i+num.i)
  def minus(num:Number) = new Number(i-num.i)
}



///Usage
val animal = new Animal("Zebra", 4)
animal.hasMoreLegs


///Task class
import hyscala.Fraction
val fraction = new Fraction(12, 3)
fraction.getFraction


