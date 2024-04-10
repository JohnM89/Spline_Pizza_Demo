// import React from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../Contact/Contact.css'

const Contact = () => {
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_9alko6t', 'template_obvxi9f', form.current, 'M25D7aTY81tiWY-_J')

      .then(
        (result) => {
          console.log(result.text)
          
        },
        (error) => {
          console.log(error.text)
          
        }
      )
  }


  return (
    <div className="grid contact grid-flow-row auto-rows-max">
                    <h1 className="text-base md:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl font-bold animate-slideFadeIn pl-24 pt-28" style={{
                color: 'green',
                textShadow: '1px 1px 2px #000000',

            }}>Contact Pizza</h1>
    <div className="flex flex-box align-center justify-center  ">
        
      <div className="text-zone md:text-xl lg:text-3xl xl:text-5xl 2xl:text-2xl">

        <p>
          d̸̘̟̞̄͛̕o̷̡͎̳͚̰̭̰͍͌͘ ̶̛̥͖͇̮͇̤̪̈̔n̸̡̖͌͑̂́̿̋̚o̴̟̞̠͒͊̑͐͒ͅt̸̗̦̗̞̺̓ ̷̢̨͇̼̩̘̍̓̏͑̃̚ͅc̷͎̞̣̱̓̂̀́̑͗̕͜o̵̳͚̩͕̬͖͒͆̍̀͗͝n̷̜̉̾t̸̢̹͓̰͎̟͌̅a̸̫̗̦̺̓̓̇̽c̵͔̞̱̳̠̓͂̉̂̂̇͐̕t̵̢̢͖̱̬̮̝͆͜ ̷̙̪̖̬̍̊̈̏̄̌͘t̷̛̺̟̾̍̊͌͝h̵̡̭̩͙̼̽̈́́͌̓̓̋͝ę̷͇̣̞͚̠̼̻̃͊͛̈́̾͠ ̸̗̇́̂̓̇p̶̳̻̣͙̗̲̤̖̈́̈͆̀͐̏͝͠ị̴̠͔͚̳͆͋́̋ż̸̟͕̦̝̹̗̻̓̓̐͆͒̇z̶̡̠̮͕̘̬̉͋ͅą̸̺̳͚̓
        </p>
        <div className="contact-form ">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder="Message" name="message" required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      {/* <div className="info">
        John MacNeil
      </div> */}
    </div>
    </div>
  )
}

export default Contact;