module.exports = function replaceHtml(template, products) {
    let output = template.replace("{{%image%}}", products.productImage)

    output = output.replace("{{%name%}}", products.name)
    output = output.replace("{{%color%}}", products.color)
    output = output.replace("{{%price%}}", products.price)
    output = output.replace("{{%camera%}}", products.camera)
    output = output.replace("{{%model%}}", products.modeName)
    output = output.replace("{{%modelNo%}}", products.modelNumber)
    output = output.replace("{{%size%}}", products.size)
    output = output.replace("{{%id%}}", products.id)
    output = output.replace("{{%ram%}}", products.ROM)
    output = output.replace("{{%des%}}", products.Description)
    return output

}