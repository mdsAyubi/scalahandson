package hyscala

/**
  * Created by ayubi on 11/02/17.
  */
class Fraction(val numerator:Int, val denominator: Int) {
  println("Numerator is"+numerator)
  println("Denominator is"+ denominator)
  println("Fraction: "+numerator+"/"+denominator + "Decimal :"+ (numerator/denominator))

  override def toString: String = {
    "Numerator:"+numerator + " Denominator:"+denominator
  }

  def getFraction:Double = numerator/(denominator*1.0)
  def +(that:Fraction):Fraction = {
    val num = numerator * that.denominator + denominator * that.numerator
    val den = denominator * that.denominator
    new Fraction(num, den)
  }

  def -(that:Fraction):Fraction = {
    val num = numerator * that.denominator - denominator * that.numerator
    val den = denominator * that.denominator
    new Fraction(num, den)
  }
}
