class DataTable {
    constructor(id) {
        this.id = id;
    }

    update(data, useFilter) {
        let table = d3.select(this.id);

        if (useFilter) {
          let data_1 = data.filter(d => d["birth year"] > 0)
          let data_2 = data_1.filter(d => d["gender"]!=0)
          let rows = table
              .selectAll("tr")
              .data(data_2)
              .join("tr");

          let columns = ['bikeid','birth year','gender','usertype'];
          rows.selectAll("td")
              .data(d => columns.map(c => d[c]))
              .join("td")
              .text(d => d)
        }
        else {
          let rows = table
              .selectAll("tr")
              .data(data)
              .join("tr");

          let columns = ['bikeid','birth year','gender','usertype'];
          rows.selectAll("td")
              .data(d => columns.map(c => d[c]))
              .join("td")
              .text(d => d)
        }

    }
    on(eventType, handler) {
        this.handlers[eventType] = handler;
    }
}
