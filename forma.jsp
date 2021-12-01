<!DOCTYPE html>
<script language = "JavaScript">

    window.onload = function() {
        var item = document.querySelector(".item");
        item.value = window.location.href;
    }
</script>
<html>
<head>
    <META http-equiv=Content-Type content="text/html; charset=utf-8">
    <title></title>
<style>
    body { font-family: Verdana,Arial,sans-serif; font-size: 0.8em; color: #26427D; background-color: #CEDBED; margin: 5px; }
    h1 {font-size: 1.1em; font-weight: bold; margin: 0; padding: 0; }
</style>
</head>
<body>
    <h1>Заказ тура</h1>
    <p> Пожалуйста, оставьте свои контактные данные (имя, телефон, e-mail), наш менеджер свяжется с Вами в ближайшее время.</p>
    <form action="send.php" method="post">
    <p><input type="text" name="fio" placeholder="Укажите ФИО" required></p>
    <p><input type="text" name="email" placeholder="Укажите e-mail" required></p>
    <p><input type="text" name="phone" placeholder="Укажите телефон" required></p>
    <p><input class="item" name="booklink" type='hidden'></p>
    <br><input type="submit" value="Отправить заказ" style="margin-top: 5px;">
    </form>
</body>
</html>