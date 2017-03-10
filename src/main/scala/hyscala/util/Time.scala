package hyscala.util

/**
  * Created by ayubi on 11/02/17.
  */
class Time(val hours:Int =0 , val minutes:Int = 0, val seconds:Int = 0) {
  require(hours>= 0 && hours <= 23, "Invalid hours")
  require(minutes >= 0 && minutes <= 59, "Invalid minutes")
  require(seconds >= 0 && seconds <= 59, "Invalid seconds")

  val minutesOfDay = hours*60 + minutes

  override def toString = s"Time($hours, $minutes, $seconds)"
}
