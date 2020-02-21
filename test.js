looker.plugins.visualizations.add({
  options: {
    html_template: {
      type: "string",
      label: "HTML Template",
      default: "<div>{{ value }}</div>",
      display: "input"
    }
  },
 
  create: function(element, config){
    element.innerHTML = "<h1>Ready to render!</h1>";
  },

  updateAsync: function(data, element, config, queryResponse, details, doneRendering){
    this.clearErrors();
    
    console.log(config.html_template)
    
    const firstRow = data[0];
    const firstCell = firstRow[queryResponse.fields.dimensions[0].name];
    const htmlForCell = LookerCharts.Utils.htmlForCell(firstCell);
    const htmlTemplate = config && config.html_template || this.options.html_template.default;

    const htmlFormatted = html_template.replace(/{{.*}}/g, htmlForCell);
    element.innerHTML = htmlFormatted;
    
    doneRendering();
  }
});
