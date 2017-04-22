package controllers

import javax.inject._
import play.api._
import play.api.mvc._

/**
  * Created by muhammadsiddiqi on 4/21/17.
  */
class EchoController extends Controller{
  def echo(message: String) = Action { request =>
    Ok(message)
  }
}
