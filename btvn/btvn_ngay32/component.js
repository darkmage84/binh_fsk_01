/*
Kiến thức cần có

customElements.define(
  "header-component",
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `hello`;
    }
  }
);

const data = {
  count: 0,
  title: "hello",
};

class F8 {
    constructor() {
        console.log(this); // object
    }
    static component(name) {
        console.log(this); // class F8
        console.log(name); 
    }
}

Object.keys(data).forEach((key) => {
  window[key] = data[key];
});

const html = `<h1>{{ title }}</h1>
<h2>{{ count }}</h2>`;

const results = html.match(/{{.+?}}/g);

console.log(results);


results.forEach((result) => {
    const variableResult = result.match(/{{().+?)}}/);
    console.log(variableResult);
})
*/

class F8 {
  constructor() {}

  static component(customElName, properties) {
    customElements.define(
      customElName,
      class extends HTMLElement {
        constructor() {
          super();
        }

        connectedCallback() {
          const data = properties.data;
          const template = properties.template;

          // 1. lấy tên biến cần tác động trong template lưu vào variables[]
          // console.log(template);

          const variables = [];
          const results = template.match(/{{.+?}}/g);
          //   console.log(results);

          if (results) {
            results.forEach((result) => {
              const variableResult = result.match(/{{(.+?)}}/);
              //   console.log(variableResult);
              variables.push(variableResult[1].trim());
            });
            // console.log(variables);
          }

          let repalceTemplate = template;
          variables.forEach((variable) => {
            // console.log(variable);
            repalceTemplate = repalceTemplate.replace(
              /{{.+?}}/,
              "/" + variable + "/"
            );
          });
          //   console.log(repalceTemplate);

          // 2. tạo Element template và truy cập vào phần tử trong template
          const templateEl = document.createElement("template");
          templateEl.innerHTML = repalceTemplate;
          const templateNode = templateEl.content.cloneNode(true);
          //   console.log(templateNode.children);
          const templateNodeChildren = templateNode.children;
          //   console.log(templateNodeChildren[1]);

          [...templateNodeChildren].forEach((node) => {
            // console.log(node);
            let nodeStr = node.childNodes[0].textContent;
            node.innerHTML = "";
            let ArrTextNodeStr = nodeStr.split("/");
            if (ArrTextNodeStr) {
              ArrTextNodeStr.forEach((text) => {
                const textNodeObj = document.createTextNode(text);
                node.append(textNodeObj);
              });
            }
          });

          // 3.
          Object.keys(data).forEach((key) => {
            window[key] = data[key];
          });

          this.append(templateNode);
        }
      }
    );
  }
}
