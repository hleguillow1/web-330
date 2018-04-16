/*Title: Exercise 4.3
 Author: Richard Krasso
 Date: 4-16-18
 Modified by: Hector Leguillow
*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Exercise 4.3 - PUT and DELETE Operations</title>

    <!-- jQuery reference -->
    <script src= "://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>

<h4>HTTP PUT</h4>
<button id="put1">HTTP PUT Request (Object Literal)</button>
<br/>

<br/>
<hr/>
<h4>HTTP DELETE</h4>
<button id="delete1">HTTP DELETE Request (Object Literal)</button>
<br/>


<script type="text/javascript">
    $(function () {
        $('#put1').click(function () {
            $.ajax({
                url: "http://httpbin.org/put",
                dataType: "json",
                type: "PUT",
                data: {firstName: "John", lastName: "Doe"},
                success: function (data, status) {
                    console.log("First Name: " + data.form.firstName + "\nLast Name: " + data.form.lastName + "\nStatus: " + status);
                }
            })
        });
        $('#delete1').click(function () {
            $.ajax({
                url: "http://httpbin.org/delete",
                dataType: "json",
                type: "DELETE",
                data: {username: "admin", password: "secret"},
                success: function (data, status) {
                    console.log("Username: " + data.form.username + "\nPassword: " + data.form.password + "\nStatus: " + status);
                }
            })
        });
    });
</script>
</body>
</html>