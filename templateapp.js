'use strict';

const e = React.createElement;

function getTemplate(name) {
  return templateList.filter(template => template.name == name)[0];
}

function strip(h) {
  return h.replace(/^\s|\s+$/g, "");
}

function initTemplate(template) {
  const init = {};
  for (const field of template.fields) {
    if (field.default) {
      init[field.name] = field.default;
    }
  }
  return init;
}

class TemplateSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opts = templateList.map((template) =>
      e('option', { value: template.name }, template.name));
    return e('div', null,
      'Select a template: ',
      e('select', {
        value: this.props.template.name,
        onChange: (event) => this.props.onSetTemplate(getTemplate(event.target.value))
      }, ...opts)
    );
  }
}

class FieldText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('input', {
      type: 'text',
      value: this.props.value,
      size: 100,
      onChange: (event) => this.props.onChange(event.target.value)
    });
  }
}

class FieldTextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('textarea', {
      cols: 100,
      rows: 5,
      value: this.props.value,
      onChange: (event) => this.props.onChange(event.target.value)
    });
  }
}

class FieldOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opts = ['', ...this.props.field.options].map((opt) =>
      e('option', { value: opt[1] }, opt[0]));
    return e('select', {
      value: this.props.value,
      onChange: (event) => this.props.onChange(event.target.value)
    }, ...opts);
  }
}

class FieldTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvText: '',
      tableHtml: ''
    };
  }

  csvToHtml() {
    let out = '';
    let rows = CSV.parse(this.state.csvText);
    if (!rows) {
      return '';
    }
    let header = true;
    for (const row of rows) {
      if (row.length == 1 && row[0] == null) {
        continue;
      }
      let tag = header ? "th" : "td";
      header = false;
      out += '<tr>';
      for (const item of row) {
        out += `<${tag}>${item?item:''}</${tag}>`;
      }
      out += '</tr>\n';
    }
    return out;
  }

  update() {
    let html = this.csvToHtml();
    this.setState({tableHtml: html});
    this.props.onChange(html);
  }

  render() {
    return e('table', null,
      e('tbody', null,
        e('tr', null,
          e('td', {style: {'verticalAlign': 'top'}},
            e('textarea', {
              cols: 60,
              rows: 10,
              value: this.state.csvText,
              onChange: (event) => {
                this.setState({csvText: event.target.value}, () => this.update());
              }
            })
          ),
          e('td', {style: {'verticalAlign': 'top'}},
            e('table', {className: 'tablepreview'},
              e('tbody', {dangerouslySetInnerHTML: {__html: this.state.tableHtml}})
            )
          )
        )
      )
    );
  }
}

const fieldTypes = {
  text: FieldText,
  textarea: FieldTextArea,
  options: FieldOptions,
  table: FieldTable
};

class TemplateInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('tr', null,
      e('td', {style: {'textAlign': 'right'}}, this.props.field.name),
      e('td', null,
        e('div', null,
          e(fieldTypes[this.props.field.type || 'text'], {
            field: this.props.field,
            value: this.props.value,
            onChange: this.props.onChange
          }),
          this.props.field.note ? e('div', null, this.props.field.note) : null
        )
      )
    )
  }
}

class TemplateInputs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputs = this.props.template.fields.map((field) =>
      e(TemplateInput, {
        field: field,
        value: this.props.values[field.name] || '',
        onChange: (value) => this.props.onChange({...this.props.values, [field.name]: value})
      }));
    return e('table', null,
      e('tbody', null, ...inputs));
  }
}

class TemplateChildren extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('div', null,
      e('table', {cellSpacing: '10px'},
        e('tbody', null,
          ...this.props.children.map((values, index) =>
            e('tr', null,
              e('td', {style: {'textAlign': 'center'}},
                e('div', null,
                  'Item ' + (index + 1),
                  e('br'),
                  e('button', {
                    onClick: (event) => {
                      const c = [...this.props.children];
                      c.splice(index, 1);
                      this.props.onChange(c);
                    }
                  }, 'Remove')
                )
              ),
              e('td', {style: {'backgroundColor': '#f0f0f0'}},
                e(TemplateInputs, {
                  key: index,
                  template: this.props.template,
                  values: values,
                  onChange: (values) => {
                    const c = [...this.props.children];
                    c[index] = values;
                    this.props.onChange(c);
                  }
                })
              )
            )
          )
        )
      ),
      e('button', {
        onClick: (event) => {
          this.props.onChange([...this.props.children, [{}]]);
        }
      }, 'Add Child Item'));
  }
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
}

class TemplateOutput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const values = {...this.props.values};
    if (this.props.template.child) {
      const getHtml = (index) => {
        if (this.props.template.child.htmlFirst && index == 0) {
          return this.props.template.child.htmlFirst;
        } else {
          return this.props.template.child.html;
        }
      };
      const joinChar = this.props.template.child.singleLine ? '' : '\n';
      values['Child'] = this.props.children.map(
        (childValues, index) => strip(getHtml(index)).replaceAll(/{{{(.+?)}}}/g, (match, p1) => {
          return childValues[p1] || '';
        })).join(joinChar);
    }
    const output = strip(this.props.template.html.replaceAll(/{{{(.+?)}}}/g, (match, p1) => {
      return values[p1] || '';
    }));
    return e('div', null,
      e('button', {
        onClick: (event) => copyTextToClipboard(output)
      }, 'Copy to Clipboard'),
      e('pre', {style: {'backgroundColor': '#f7f7f7'}}, output));
  }
}

class TemplateApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { template: templateList[0], values: initTemplate(templateList[0]), children: [{}] };
  }

  render() {
    return e('div', null,
      e(TemplateSelector, {
        template: this.state.template,
        onSetTemplate: (t) => this.setState({ template: t, values: initTemplate(t), children: [{}] })
      }),
      e('hr'),
      e(TemplateInputs, {
        template: this.state.template,
        values: this.state.values,
        onChange: (values) => this.setState({ values: values })
      }),
      this.state.template.child ? e(TemplateChildren, {
        template: this.state.template.child,
        children: this.state.children,
        onChange: (children) => this.setState({ children: children })
      }) : null,
      e('hr'),
      e(TemplateOutput, {
        template: this.state.template,
        values: this.state.values,
        children: this.state.children
      })
    );
  }
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(e(TemplateApp), domContainer);
