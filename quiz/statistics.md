---
layout: page
title: Statistics Quiz
permalink: /quiz/statistics
---

{% for q in site.data.statistics_questions %}

  {% include zip.html title=q.question answer=q.answer open=q.open children=q.children %}

{% endfor %}
