<template lang="html">
  <section class="contact">
    <div class="contact-start">
    <h1 class="container-title"><b>Kom met ons in contact</b></h1>
    <p class="container-info">Heeft u nog meer informatie nodig? Bel ons, stuur een mailtje of vul het formulier in en wij helpen u zo spoedig mogelijk</p>
    </div>

    <section class="contact-container">

      <div class="container-content">
        <div class="content-box">
        <h2 class="davyOrsted">Davy&Ørsted</h2>
        <div class="DOborder"></div>
        <p><a class="contact-info" onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">Boeierspad 24</a></p>
        <p><a class="contact-info" onclick="window.location.href='https://www.google.com/maps/place/Davy+en+%C3%98rsted/@52.3334536,4.8458888,17z/data=!4m5!3m4!1s0x47c5e1e58ec01133:0x54c6c7fa2f3ec933!8m2!3d52.3328226!4d4.849228'">1081 KE Amsterdam</a></p>
        <p class="grey-contact"><a class="grey-contact-info" onclick="window.location.href='mailto:info@davy-orsted.nl'">info@davy-orsted.nl</a></p>
        <p><a class="contact-info" href="tel://+31653244451">06 53 24 44 51</a></p>
        </div>
      </div>
      <div class="container-content">
        <h2 class="contact-title">Contact ons</h2>
        <form>
          <div class="group">
            <input type="text" required placeholder="Voornaam">
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>

          <div class="group">
            <input type="text" required placeholder="Achternaam">
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div class="group">
            <input type="text" required placeholder="E-mail">
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>

          <div class="group">
            <input type="text" required placeholder="Telefoonnummer">
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div class="group">
            <textarea name="name" rows="8" cols="80" placeholder="Bericht"></textarea>
            <span class="highlight"></span>
            <span class="bar"></span>
          </div>
          <div class="group">
               <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" class="recaptcha" />
          </div>
          <div class="group">
            <button class="form-button" type="submit">
              Versturen
            </button>
          </div>
        </form>
      </div>

    </section>


  </section>

</template>

<script>
export default {
  layout: 'headerbar',
  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    onSuccess(token) {
      console.log('Succeeded:', token)
      // here you submit the form
      this.$refs.form.submit()
    },
    onExpired() {
      console.log('Expired')
    }
  }
}
</script>

<style lang="css" scoped>
.contact{
  width: 100vw;
}

.contact-start{
  background-color: #2A393F;
  /* padding: 50px; */
  width: 100vw;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content-box{
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  height: 70%;
}
.container-title{
  font-size: 24px;
}
.container-info{
  font-size: 14px;
  padding: 0 20px;
}
.container-title,
.container-info{
  text-align: center;
  color: white;
  margin: 0 auto;
}
.container-content:nth-of-type(1){
  display: flex;
  justify-content: center;
  background-color: #4C565C;
  height: 450px;
}
.davyOrsted{
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  margin-top: 50px;
}
.DOborder{
  height: 10px;
  width: 280px;
  background-color: #97A0A7;
  border-style: none;
}
.contact-info{
  font-size: 22px;
  color: white;
  cursor: pointer;
  border: none;
}

.grey-contact-info{
  color: #97A0A7;
  font-size: 22px;
}
.form-button{
  width: 300px;
  background-color: #2A393F;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.container-content:nth-of-type(2){
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact-title{
  font-size: 22px;
  margin-top: 20px;
}
.group 			  {
  position:relative;
  margin-bottom:20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.recaptcha{
  margin: 0 auto;
  width: 80%;
}
input, textarea{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width: 80%;
  border:none;
  border-bottom:1px solid #ACADAF;
  margin: 0 auto;
}

::placeholder				 {
  color: #ACADAF;
  font-size:18px;
  position:absolute;
  pointer-events:none;
  line-height: 1.78;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .contact-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container-content:nth-of-type(1){
    height: 100%;
  }
  .container-title{
    font-size: 30px;
  }
  .contact-title{
    font-size: 26px;
  }
}

@media (min-width: 1390px) {
  .container-top-border{
    height: 55px;
  }
  .blok-title{
    height: 55px;
  }
  .container-title{
    font-size: 32px;
  }
  .contact-title{
    font-size: 30px;
    margin-top: 50px;
  }
  .container-info{
    font-size: 16px;
    padding: 0 20px;
  }
  .recaptcha{
    width: 60%;
  }
  input, textarea{
    width: 60%;
  }

}

@media (min-width: 1800px) {
  .container-top-border{
    height: 65px;
  }
  .blok-title{
    height: 65px;
  }
}
</style>
