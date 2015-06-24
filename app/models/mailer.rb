require 'mandrill'

class Mailer
  def send(data, email_list)
    mandrill = Mandrill::API.new ENV["mandrill_api_key"] || SETTINGS["mandrill_api_key"]
    message = Hash.new
    
    message[:subject] = "Confirmação de presença #{data['invitation_name']} no casamento de Mariana e Rafael Une 19.09.2015"
    message[:html] = %Q{
      <p>Confirmação de presença no casamento de <b>Mariana e Rafael Une</b> 19.09.2015</p>
      <p>Convidado: #{data['invitation_name']}</p>
      <p>E-mail: #{data['guest_email']}</p>
      <p>Nro. convidados: #{data['guest_number']}</p>
      <p>Telefone contato: #{data['guest_phone']}</p>
      <p>Comentário: #{data['guest_comment']}</p>
    }
    message[:to] = email_list.map {|email| {:email => email}}
    message[:from_email] = ENV["sender_from"] || SETTINGS["sender_from"]
    message[:from_name] = "Site dos noivos"

    mandrill.messages.send message
  end
end