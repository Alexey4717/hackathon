<template>
  <form>
    <div :class="$style.decor">
      <div :class="$style.form_left_decoration"></div>
      <div :class="$style.form_right_decoration"></div>
      <div :class="$style.circle"></div>
      <div :class="$style.form_inner">
        <h3>Написать нам</h3>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Сообщение..." rows="3"></textarea>
        <input type="submit" value="Отправить" />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="scss" module>

.decor {
  position: relative;
  max-width: 400px;
  margin: 50px auto 0;
  background: var(--primary);
  border-radius: 30px;
}
.form_left_decoration,
.form_right_decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  background: #f69a73;
  border-radius: 20px;
}
.form_left_decoration {
  bottom: 60px;
  left: -30px;
}
.form_right_decoration {
  top: 60px;
  right: -30px;
}
.form_left_decoration:before,
.form_left_decoration:after,
.form_right_decoration:before,
.form_right_decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: var(--primary);
}
.form_left_decoration:before {
  top: -20px;
}
.form_left_decoration:after {
  top: 20px;
  left: 10px;
}
.form_right_decoration:before {
  top: -20px;
  right: 0;
}
.form_right_decoration:after {
  top: 20px;
  right: 10px;
}
.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary);
}
.form_inner {
  padding: 50px;
}
.form_inner input,
.form_inner textarea {
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-width: 0;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
}
.form_inner input[type="submit"] {
  margin-top: 30px;
  background: #f69a73;
  border-bottom: 4px solid #d87d56;
  color: var(--primary);
  font-size: 14px;
}
.form_inner textarea {
  resize: none;
}
.form_inner h3 {
  margin-top: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #707981;
}
</style>
