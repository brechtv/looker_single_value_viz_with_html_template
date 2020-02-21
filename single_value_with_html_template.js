looker.plugins.visualizations.add({
  options: {
    html_template: {
      type: "string",
      label: "HTML Template",
      default: `<div style="text-align: center; color: #282828; font-family: 'Open Sans'; font-size: 5rem; font-weight: 700;">{{ value }}</div>`
    }
  },
 
  create: function(element, config) {},

  updateAsync: function(data, element, config, queryResponse, details, doneRendering){
    this.clearErrors();
    
    const firstRow = data[0];
    const firstDimension = firstRow[queryResponse.fields.dimensions[0].name];
    const firstMeasure = firstRow[queryResponse.fields.measure_like[0].name];
    const firstCell = firstDimension ? firstDimension : firstMeasure;
    const htmlForCell = LookerCharts.Utils.htmlForCell(firstCell);
    const htmlTemplate = config && config.html_template || this.options.html_template.default;
    const htmlFormatted = htmlTemplate.replace(/{{.*}}/g, htmlForCell);

    element.innerHTML = htmlFormatted;
    
    doneRendering();
  }
});
