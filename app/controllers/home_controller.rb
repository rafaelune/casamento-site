class HomeController < ApplicationController
	def index
	end

  def confirmation
    mail_list = ENV["email_list"] || SETTINGS["email_list"].split(",")
    mailer = Mailer.new.send(params, mail_list)
    render :nothing => :ok
  end
end
