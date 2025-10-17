function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)

    // Set children
    domElement.innerHTML = reactElement.props.children

    // Set other props dynamically
    for (let prop in reactElement.props) {
        if(prop !== "children"){
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children: 'Click me to visit google'
    }
}

const mainContainer = document.querySelector('#root')

// Call the renderer
customRender(reactElement, mainContainer)
