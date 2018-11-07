const FILES_RAW= `src/snapshot.js \
	src/globals.js \
	src/utils.js \
	src/wrapmap.js \
	src/xmlnames.js \
	src/idl.js \
	src/domcore.js \
	src/events.js \
	src/htmlelts.js \
	src/windowobjs.js \
	src/AttrArrayProxy.js \
	src/NodeListProxy.js \
	src/HTMLCollectionProxy.js \
	src/DOMException.js \
	src/impl/EventTarget.js \
	src/impl/Node.js \
	src/impl/Leaf.js \
	src/impl/CharacterData.js \
	src/impl/Text.js \
	src/impl/Comment.js \
	src/impl/ProcessingInstruction.js \
	src/impl/Element.js \
	src/impl/MutationConstants.js \
	src/impl/domstr.js \
	src/impl/Document.js \
	src/impl/DocumentFragment.js \
	src/impl/DocumentType.js \
	src/impl/DOMImplementation.js \
	src/impl/FilteredElementList.js \
	src/impl/Event.js \
	src/impl/CustomEvent.js \
	src/impl/UIEvent.js \
	src/impl/MouseEvent.js \
	src/impl/HTMLElement.js \
	src/impl/HTMLScriptElement.js \
	src/impl/HTMLParser.js \
	src/impl/CSSStyleDeclaration.js \
	src/impl/cssparser.js \
	src/impl/URL.js \
	src/impl/URLDecompositionAttributes.js \
	src/impl/Location.js \
	src/impl/Window.js \
	src/main.js`;

const FILES = FILES_RAW.split(/[ ]+[\t\n]*/).map(f => `./${f}`);

for (let f of FILES) {
  module.require(f);
}

console.log(FILES);
