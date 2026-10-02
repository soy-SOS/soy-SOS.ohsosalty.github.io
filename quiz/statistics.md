---
layout: page
title: Statistics Quiz
permalink: /quiz/statistics
---

{% for q in site.data.statistics_questions %}

  {% include zip.html title=q.question content=q.answer open=q.open %}

{% endfor %}
