var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"","category":"page"},{"location":"api/","page":"API","title":"API","text":"CurrentModule = Brillouin","category":"page"},{"location":"api/#Exported-types","page":"API","title":"Exported types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Brillouin]\nPrivate = false\nOrder   = [:type]","category":"page"},{"location":"api/#Exported-methods","page":"API","title":"Exported methods","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Brillouin]\nPrivate = false\nOrder   = [:function]","category":"page"},{"location":"api/#Exported-constants","page":"API","title":"Exported constants","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Modules = [Brillouin]\nPrivate = false\nOrder   = [:constant]","category":"page"},{"location":"wignerseitz/#Wigner–Seitz-cells","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"","category":"section"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"We can generate the Wigner–Seitz cell associated with an arbitrary lattice basis Vs using wignerseitz. For example, to generate the unit cell of a (primitive) lattice with Bravais type cF:","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"using Brillouin\n\nRs = [[0.0, 0.5, 0.5], [0.5, 0.0, 0.5], [0.5, 0.5, 0.0]]\ncR = wignerseitz(Rs)","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"We can also generate the Brillouin zone of the corresponding reciprocal lattice:","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"Gs = [[-1.0, 1.0, 1.0], [1.0, -1.0, 1.0], 1.0, 1.0, -1.0]]\ncG = wignerseitz(Gs)","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"Finally, we can plot the generated cells using e.g. PlotlyJS.jl via plot(cR) and plot(cG) (or, alternatively, via a 3D-capable backend of AbstractPlotting.jl):","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"Unit cell","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"<html>\n<head>\n     <script src=\"https://cdn.plot.ly/plotly-latest.min.js\"></script>\n</head>\n<body>\n     <script>\n    gd = (function() {\n  var WIDTH_IN_PERCENT_OF_PARENT = 100;\n  var HEIGHT_IN_PERCENT_OF_PARENT = 100;\n  var gd = Plotly.d3.select('body')\n    .append('div').attr(\"id\", \"3bdd8491-e53c-44b0-bd0b-8d3fe3fcec64\")\n    .style({\n      width: WIDTH_IN_PERCENT_OF_PARENT + '%',\n      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',\n      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',\n      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'\n    })\n    .node();\n  var plot_json = {\"layout\":{\"showlegend\":false,\"paper_bgcolor\":\"rgba(0, 0, 0, 0)\",\"scene\":{\"camera\":{\"up\":{\"y\":0,\"z\":1,\"x\":0}},\"xaxis\":{\"showgrid\":false,\"zeroline\":false,\"tickvals\":[],\"title\":{\"text\":\"\"},\"showbackground\":false},\"yaxis\":{\"showgrid\":false,\"zeroline\":false,\"tickvals\":[],\"title\":{\"text\":\"\"},\"showbackground\":false},\"zaxis\":{\"showgrid\":false,\"zeroline\":false,\"tickvals\":[],\"title\":{\"text\":\"\"},\"showbackground\":false},\"aspectmode\":\"data\"},\"margin\":{\"l\":0,\"b\":0,\"r\":0,\"t\":0},\"plot_bgcolor\":\"rgba(0, 0, 0, 0)\",\"autosize\":false},\"frames\":[],\"data\":[{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.25,0.5,0.25,0.0,0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.25,0.0,0.25,0.5,0.25],\"x\":[0.25,0.0,-0.25,0.0,0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.25,0.0,0.25,0.5,0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-0.25,0.0,0.25,0.0,-0.25],\"x\":[-0.25,-0.5,-0.25,0.0,-0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.5,0.25,0.0,0.25,0.5],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,0.25,0.0,-0.25,0.0],\"x\":[0.0,0.25,0.5,0.25,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.25,0.0,0.25,0.5,0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-0.25,-0.5,-0.25,0.0,-0.25],\"x\":[0.25,0.0,-0.25,0.0,0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.0,0.25,0.0,-0.25,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,0.25,0.5,0.25,0.0],\"x\":[0.5,0.25,0.0,0.25,0.5]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-0.25,0.0,0.25,0.0,-0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.25,0.5,0.25,0.0,0.25],\"x\":[-0.25,0.0,-0.25,-0.5,-0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-0.25,-0.5,-0.25,0.0,-0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.25,0.0,0.25,0.5,0.25],\"x\":[-0.25,0.0,0.25,0.0,-0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-0.25,0.0,0.25,0.0,-0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-0.25,0.0,-0.25,-0.5,-0.25],\"x\":[-0.25,-0.5,-0.25,0.0,-0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-0.25,-0.5,-0.25,0.0,-0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-0.25,0.0,0.25,0.0,-0.25],\"x\":[-0.25,0.0,-0.25,-0.5,-0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.0,0.25,0.0,-0.25,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-0.5,-0.25,0.0,-0.25,-0.5],\"x\":[0.0,0.25,0.5,0.25,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[0.0,-0.25,-0.5,-0.25,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,0.25,0.0,-0.25,0.0],\"x\":[0.5,0.25,0.0,0.25,0.5]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-0.25,-0.5,-0.25,0.0,-0.25],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-0.25,0.0,-0.25,-0.5,-0.25],\"x\":[0.25,0.0,-0.25,0.0,0.25]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(212,216,227)\",\"width\":4},\"hovertext\":\"<b>v</b><sub>1</sub>\",\"y\":[0.0,0.2375],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.2375],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(212,216,227)\",\"width\":4},\"hovertext\":\"<b>v</b><sub>2</sub>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.2375],\"x\":[0.0,0.2375]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(212,216,227)\",\"width\":4},\"hovertext\":\"<b>v</b><sub>3</sub>\",\"y\":[0.0,0.2375],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,0.2375]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(39,60,117)\",\"width\":6},\"hovertext\":\"<b>v</b><sub>1</sub>\",\"y\":[0.2625,0.5],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.2625,0.5],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(39,60,117)\",\"width\":6},\"hovertext\":\"<b>v</b><sub>2</sub>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.2625,0.5],\"x\":[0.2625,0.5]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(39,60,117)\",\"width\":6},\"hovertext\":\"<b>v</b><sub>3</sub>\",\"y\":[0.2625,0.5],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.2625,0.5]},{\"sizeref\":0.07071067811865477,\"colorscale\":[[0,\"rgb(39,60,117)\"],[1,\"rgb(39,60,117)\"]],\"w\":[0.7071067811865475],\"hovertext\":\"<b>v</b><sub>1</sub>\",\"showscale\":false,\"x\":[0.0],\"v\":[0.7071067811865475],\"z\":[0.5],\"u\":[0.0],\"y\":[0.5],\"type\":\"cone\",\"hoverinfo\":\"text+x+y+z\",\"anchor\":\"tail\"},{\"sizeref\":0.07071067811865477,\"colorscale\":[[0,\"rgb(39,60,117)\"],[1,\"rgb(39,60,117)\"]],\"w\":[0.7071067811865475],\"hovertext\":\"<b>v</b><sub>2</sub>\",\"showscale\":false,\"x\":[0.5],\"v\":[0.0],\"z\":[0.5],\"u\":[0.7071067811865475],\"y\":[0.0],\"type\":\"cone\",\"hoverinfo\":\"text+x+y+z\",\"anchor\":\"tail\"},{\"sizeref\":0.07071067811865477,\"colorscale\":[[0,\"rgb(39,60,117)\"],[1,\"rgb(39,60,117)\"]],\"w\":[0.0],\"hovertext\":\"<b>v</b><sub>3</sub>\",\"showscale\":false,\"x\":[0.5],\"v\":[0.7071067811865475],\"z\":[0.0],\"u\":[0.7071067811865475],\"y\":[0.5],\"type\":\"cone\",\"hoverinfo\":\"text+x+y+z\",\"anchor\":\"tail\"},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(242,215,208)\",\"width\":4},\"hovertext\":\"<b>x</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,0.4823223304703363]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(242,215,208)\",\"width\":4},\"hovertext\":\"<b>y</b>\",\"y\":[0.0,0.4823223304703363],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(242,215,208)\",\"width\":4},\"hovertext\":\"<b>z</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.4823223304703363],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(194,54,22)\",\"width\":6},\"hovertext\":\"<b>x</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.5176776695296637,0.6414213562373096]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(194,54,22)\",\"width\":6},\"hovertext\":\"<b>y</b>\",\"y\":[0.5176776695296637,0.6414213562373096],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(194,54,22)\",\"width\":6},\"hovertext\":\"<b>z</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.5176776695296637,0.6414213562373096],\"x\":[0.0,0.0]},{\"sizeref\":0.07071067811865477,\"colorscale\":[[0,\"rgb(194,54,22)\"],[1,\"rgb(194,54,22)\"]],\"w\":[0.0],\"hovertext\":\"<b>x</b>\",\"showscale\":false,\"x\":[0.6414213562373096],\"v\":[0.0],\"z\":[0.0],\"u\":[1.0],\"y\":[0.0],\"type\":\"cone\",\"hoverinfo\":\"text\",\"anchor\":\"tail\"},{\"sizeref\":0.07071067811865477,\"colorscale\":[[0,\"rgb(194,54,22)\"],[1,\"rgb(194,54,22)\"]],\"w\":[0.0],\"hovertext\":\"<b>y</b>\",\"showscale\":false,\"x\":[0.0],\"v\":[1.0],\"z\":[0.0],\"u\":[0.0],\"y\":[0.6414213562373096],\"type\":\"cone\",\"hoverinfo\":\"text\",\"anchor\":\"tail\"},{\"sizeref\":0.07071067811865477,\"colorscale\":[[0,\"rgb(194,54,22)\"],[1,\"rgb(194,54,22)\"]],\"w\":[1.0],\"hovertext\":\"<b>z</b>\",\"showscale\":false,\"x\":[0.0],\"v\":[0.0],\"z\":[0.6414213562373096],\"u\":[0.0],\"y\":[0.0],\"type\":\"cone\",\"hoverinfo\":\"text\",\"anchor\":\"tail\"}]};\n  Plotly.newPlot(gd, plot_json);\n  window.onresize = function() {\n    Plotly.Plots.resize(gd);\n  };\n  return gd;\n})();\n\n </script>\n\n</body>\n</html>","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"Brillouin zone","category":"page"},{"location":"wignerseitz/","page":"Wigner–Seitz cells","title":"Wigner–Seitz cells","text":"<html>\n<head>\n     <script src=\"https://cdn.plot.ly/plotly-latest.min.js\"></script>\n</head>\n<body>\n     <script>\n    gd = (function() {\n  var WIDTH_IN_PERCENT_OF_PARENT = 100;\n  var HEIGHT_IN_PERCENT_OF_PARENT = 100;\n  var gd = Plotly.d3.select('body')\n    .append('div').attr(\"id\", \"98bc93f9-3a2b-4406-bf66-d0e33dec6b99\")\n    .style({\n      width: WIDTH_IN_PERCENT_OF_PARENT + '%',\n      'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',\n      height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',\n      'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'\n    })\n    .node();\n  var plot_json = {\"layout\":{\"showlegend\":false,\"paper_bgcolor\":\"rgba(0, 0, 0, 0)\",\"scene\":{\"camera\":{\"up\":{\"y\":0,\"z\":1,\"x\":0}},\"xaxis\":{\"showgrid\":false,\"zeroline\":false,\"tickvals\":[],\"title\":{\"text\":\"\"},\"showbackground\":false},\"yaxis\":{\"showgrid\":false,\"zeroline\":false,\"tickvals\":[],\"title\":{\"text\":\"\"},\"showbackground\":false},\"zaxis\":{\"showgrid\":false,\"zeroline\":false,\"tickvals\":[],\"title\":{\"text\":\"\"},\"showbackground\":false},\"aspectmode\":\"data\"},\"margin\":{\"l\":0,\"b\":0,\"r\":0,\"t\":0},\"plot_bgcolor\":\"rgba(0, 0, 0, 0)\",\"autosize\":false},\"frames\":[],\"data\":[{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[3.1415926535897922,-9.166437403450657e-16,-9.166437403450657e-16,3.141592653589794,6.283185307179587,6.283185307179586,3.1415926535897922],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,3.141592653589794,6.283185307179586,6.283185307179586,3.1415926535897922,8.881784197001252e-16,0.0],\"x\":[-6.283185307179587,-6.283185307179586,-3.141592653589794,-9.166437403450657e-16,0.0,-3.141592653589794,-6.283185307179587]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[6.283185307179586,6.283185307179587,6.283185307179586,6.283185307179587,6.283185307179586],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[8.881784197001252e-16,3.1415926535897922,9.166437403450657e-16,-3.1415926535897922,8.881784197001252e-16],\"x\":[-3.141592653589794,0.0,3.141592653589794,0.0,-3.141592653589794]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-6.283185307179586,-6.283185307179586,-6.283185307179587,-6.283185307179587,-6.283185307179586],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[3.141592653589794,8.881784197001252e-16,-3.1415926535897922,0.0,3.141592653589794],\"x\":[-8.881784197001252e-16,-3.141592653589794,0.0,3.1415926535897922,-8.881784197001252e-16]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-9.166437403450657e-16,-9.166437403450657e-16,-3.1415926535897922,-6.283185307179586,-6.283185307179586,-3.141592653589794,-9.166437403450657e-16],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[6.283185307179586,3.141592653589794,0.0,8.881784197001252e-16,3.141592653589794,6.283185307179586,6.283185307179586],\"x\":[-3.141592653589794,-6.283185307179586,-6.283185307179587,-3.141592653589794,-8.881784197001252e-16,9.166437403450657e-16,-3.141592653589794]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[3.1415926535897922,-8.881784197001252e-16,-8.881784197001252e-16,3.1415926535897922,6.283185307179586,6.283185307179587,3.1415926535897922],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-6.283185307179587,-6.283185307179586,-3.141592653589794,0.0,8.881784197001252e-16,-3.1415926535897922,-6.283185307179587],\"x\":[0.0,-3.141592653589794,-6.283185307179586,-6.283185307179587,-3.141592653589794,0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[3.1415926535897922,-8.881784197001252e-16,-3.1415926535897922,-9.166437403450657e-16,3.1415926535897922],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,-3.141592653589794,0.0,3.141592653589794,0.0],\"x\":[-6.283185307179587,-6.283185307179586,-6.283185307179587,-6.283185307179586,-6.283185307179587]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-6.283185307179587,-6.283185307179586,-3.1415926535897922,-8.881784197001252e-16,-8.881784197001252e-16,-3.1415926535897922,-6.283185307179587],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-3.1415926535897922,8.881784197001252e-16,0.0,-3.141592653589794,-6.283185307179586,-6.283185307179587,-3.1415926535897922],\"x\":[0.0,-3.141592653589794,-6.283185307179587,-6.283185307179586,-3.141592653589794,0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[3.141592653589794,-9.166437403450657e-16,-3.141592653589794,9.166437403450657e-16,3.141592653589794],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[9.166437403450657e-16,3.141592653589794,9.166437403450657e-16,-3.141592653589794,9.166437403450657e-16],\"x\":[6.283185307179586,6.283185307179586,6.283185307179586,6.283185307179586,6.283185307179586]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[9.166437403450657e-16,3.1415926535897922,6.283185307179587,6.283185307179586,3.141592653589794,9.166437403450657e-16,9.166437403450657e-16],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-6.283185307179586,-6.283185307179587,-3.1415926535897922,9.166437403450657e-16,9.166437403450657e-16,-3.141592653589794,-6.283185307179586],\"x\":[3.141592653589794,0.0,0.0,3.141592653589794,6.283185307179586,6.283185307179586,3.141592653589794]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-6.283185307179587,-6.283185307179587,-3.1415926535897922,9.166437403450657e-16,9.166437403450657e-16,-3.141592653589794,-6.283185307179587],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,-3.1415926535897922,-6.283185307179587,-6.283185307179586,-3.141592653589794,9.166437403450657e-16,0.0],\"x\":[3.1415926535897922,0.0,0.0,3.141592653589794,6.283185307179586,6.283185307179586,3.1415926535897922]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[9.166437403450657e-16,-3.1415926535897922,-8.881784197001252e-16,3.1415926535897922,9.166437403450657e-16],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[-6.283185307179586,-6.283185307179587,-6.283185307179586,-6.283185307179587,-6.283185307179586],\"x\":[3.141592653589794,0.0,-3.141592653589794,0.0,3.141592653589794]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[3.141592653589794,-9.166437403450657e-16,-9.166437403450657e-16,3.141592653589794,6.283185307179586,6.283185307179587,3.141592653589794],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[6.283185307179586,6.283185307179586,3.141592653589794,9.166437403450657e-16,9.166437403450657e-16,3.1415926535897922,6.283185307179586],\"x\":[-9.166437403450657e-16,3.141592653589794,6.283185307179586,6.283185307179586,3.141592653589794,0.0,-9.166437403450657e-16]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[-6.283185307179587,-3.141592653589794,-9.166437403450657e-16,-9.166437403450657e-16,-3.141592653589794,-6.283185307179586,-6.283185307179587],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[0.0,9.166437403450657e-16,3.141592653589794,6.283185307179586,6.283185307179586,3.141592653589794,0.0],\"x\":[3.1415926535897922,6.283185307179586,6.283185307179586,3.141592653589794,9.166437403450657e-16,-8.881784197001252e-16,3.1415926535897922]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(47,54,64)\",\"width\":3},\"hovertext\":\"BZ\",\"y\":[3.141592653589794,-9.166437403450657e-16,-3.141592653589794,-9.166437403450657e-16,3.141592653589794],\"type\":\"scatter3d\",\"hoverinfo\":\"text+x+y+z\",\"z\":[6.283185307179586,6.283185307179586,6.283185307179586,6.283185307179586,6.283185307179586],\"x\":[-9.166437403450657e-16,-3.141592653589794,9.166437403450657e-16,3.141592653589794,-9.166437403450657e-16]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(212,216,227)\",\"width\":4},\"hovertext\":\"<b>v</b><sub>1</sub>\",\"y\":[0.0,2.9845130209103035],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,2.9845130209103035],\"x\":[-0.0,-2.9845130209103035]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(212,216,227)\",\"width\":4},\"hovertext\":\"<b>v</b><sub>2</sub>\",\"y\":[-0.0,-2.9845130209103043],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,2.9845130209103043],\"x\":[0.0,2.9845130209103043]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(212,216,227)\",\"width\":4},\"hovertext\":\"<b>v</b><sub>3</sub>\",\"y\":[0.0,2.984513020910303],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[-0.0,-2.984513020910303],\"x\":[0.0,2.984513020910303]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(39,60,117)\",\"width\":6},\"hovertext\":\"<b>v</b><sub>1</sub>\",\"y\":[3.2986722862692828,6.283185307179586],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[3.2986722862692828,6.283185307179586],\"x\":[-3.2986722862692828,-6.283185307179586]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(39,60,117)\",\"width\":6},\"hovertext\":\"<b>v</b><sub>2</sub>\",\"y\":[-3.2986722862692837,-6.283185307179586],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[3.2986722862692837,6.283185307179586],\"x\":[3.2986722862692837,6.283185307179586]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(39,60,117)\",\"width\":6},\"hovertext\":\"<b>v</b><sub>3</sub>\",\"y\":[3.2986722862692823,6.283185307179586],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[-3.2986722862692823,-6.283185307179586],\"x\":[3.2986722862692823,6.283185307179586]},{\"sizeref\":1.0882796185405306,\"colorscale\":[[0,\"rgb(39,60,117)\"],[1,\"rgb(39,60,117)\"]],\"w\":[0.5773502691896258],\"hovertext\":\"<b>v</b><sub>1</sub>\",\"showscale\":false,\"x\":[-6.283185307179586],\"v\":[0.5773502691896258],\"z\":[6.283185307179586],\"u\":[-0.5773502691896258],\"y\":[6.283185307179586],\"type\":\"cone\",\"hoverinfo\":\"text+x+y+z\",\"anchor\":\"tail\"},{\"sizeref\":1.0882796185405306,\"colorscale\":[[0,\"rgb(39,60,117)\"],[1,\"rgb(39,60,117)\"]],\"w\":[0.5773502691896258],\"hovertext\":\"<b>v</b><sub>2</sub>\",\"showscale\":false,\"x\":[6.283185307179586],\"v\":[-0.5773502691896258],\"z\":[6.283185307179586],\"u\":[0.5773502691896258],\"y\":[-6.283185307179586],\"type\":\"cone\",\"hoverinfo\":\"text+x+y+z\",\"anchor\":\"tail\"},{\"sizeref\":1.0882796185405306,\"colorscale\":[[0,\"rgb(39,60,117)\"],[1,\"rgb(39,60,117)\"]],\"w\":[-0.5773502691896258],\"hovertext\":\"<b>v</b><sub>3</sub>\",\"showscale\":false,\"x\":[6.283185307179586],\"v\":[0.5773502691896258],\"z\":[-6.283185307179586],\"u\":[0.5773502691896258],\"y\":[6.283185307179586],\"type\":\"cone\",\"hoverinfo\":\"text+x+y+z\",\"anchor\":\"tail\"},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(242,215,208)\",\"width\":4},\"hovertext\":\"<b>x</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,6.011115402544454]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(242,215,208)\",\"width\":4},\"hovertext\":\"<b>y</b>\",\"y\":[0.0,6.011115402544454],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(242,215,208)\",\"width\":4},\"hovertext\":\"<b>z</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,6.011115402544454],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(194,54,22)\",\"width\":6},\"hovertext\":\"<b>x</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[6.5552552118147185,8.459744544260648]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(194,54,22)\",\"width\":6},\"hovertext\":\"<b>y</b>\",\"y\":[6.5552552118147185,8.459744544260648],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[0.0,0.0],\"x\":[0.0,0.0]},{\"mode\":\"lines\",\"line\":{\"color\":\"rgb(194,54,22)\",\"width\":6},\"hovertext\":\"<b>z</b>\",\"y\":[0.0,0.0],\"type\":\"scatter3d\",\"hoverinfo\":\"text\",\"z\":[6.5552552118147185,8.459744544260648],\"x\":[0.0,0.0]},{\"sizeref\":1.0882796185405306,\"colorscale\":[[0,\"rgb(194,54,22)\"],[1,\"rgb(194,54,22)\"]],\"w\":[0.0],\"hovertext\":\"<b>x</b>\",\"showscale\":false,\"x\":[8.459744544260648],\"v\":[0.0],\"z\":[0.0],\"u\":[1.0],\"y\":[0.0],\"type\":\"cone\",\"hoverinfo\":\"text\",\"anchor\":\"tail\"},{\"sizeref\":1.0882796185405306,\"colorscale\":[[0,\"rgb(194,54,22)\"],[1,\"rgb(194,54,22)\"]],\"w\":[0.0],\"hovertext\":\"<b>y</b>\",\"showscale\":false,\"x\":[0.0],\"v\":[1.0],\"z\":[0.0],\"u\":[0.0],\"y\":[8.459744544260648],\"type\":\"cone\",\"hoverinfo\":\"text\",\"anchor\":\"tail\"},{\"sizeref\":1.0882796185405306,\"colorscale\":[[0,\"rgb(194,54,22)\"],[1,\"rgb(194,54,22)\"]],\"w\":[1.0],\"hovertext\":\"<b>z</b>\",\"showscale\":false,\"x\":[0.0],\"v\":[0.0],\"z\":[8.459744544260648],\"u\":[0.0],\"y\":[0.0],\"type\":\"cone\",\"hoverinfo\":\"text\",\"anchor\":\"tail\"}]};\n  Plotly.newPlot(gd, plot_json);\n  window.onresize = function() {\n    Plotly.Plots.resize(gd);\n  };\n  return gd;\n})();\n\n </script>\n\n</body>\n</html>","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Brillouin","category":"page"},{"location":"#Brillouin.jl","page":"Home","title":"Brillouin.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Brillouin.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"wignerseitz.md\",\n         \"api.md\"]","category":"page"}]
}