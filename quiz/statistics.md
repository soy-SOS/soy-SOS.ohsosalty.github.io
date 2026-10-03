---
layout: page
title: Statistics Quiz
permalink: /quiz/statistics
---


{% assign testgroup = site.data.statistics_questions | group_by: 'topic' %}

* Do not remove this line (it will not be displayed)
{:toc}

{% for i in testgroup %}


## {{i.name}}
*([zurück nach oben](./statistics.md#{{title}}))*

{% for q in i.items %}

  {% include zip.html title=q.question answer=q.answer open=q.open children=q.children %}

{% endfor %}

{% endfor %}
