<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<c:if test="${id == '0'}">
	<script>
		alert('작성 내용을 확인해주세요.')
		history.back()
	</script>
</c:if>
<c:if test="${id != '0'}">
	<script>
		location.href="/Movie/Main.movie"
	</script>
</c:if>