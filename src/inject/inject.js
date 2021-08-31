chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            main();
        }
    }, 10);

    function main() {
        // Replace page title
        document.title = generateReplacment(document.title);

        // Get all text nodes to check
        var textNodes = $('body *').contents().filter(function() {
            return this.nodeType == Node.TEXT_NODE;
        });

        // Replace all text nodes
        textNodes.each(function(index, textNode) {
            textNode.nodeValue = generateReplacment(textNode.nodeValue);
        });
    }

    function generateReplacment(text) {
        var regex1 = /algebra/gi;
        return text.replace(regex1, getName()).replace("algebra", "Al-Jazeera");
    }

});