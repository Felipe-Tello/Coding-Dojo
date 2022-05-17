<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><c:out value="${person.firstName}"/> <c:out value="${person.lastName}"/></h1>
    <h1><c:out value="${person.license.state}"/></h1>
    <h1><c:out value="${person.license.expirationDate}"/></h1>
</body>
</html>