const dtElements = document.querySelectorAll("dt");
const aElements = document.querySelectorAll("a");
const trim = /^[\t\f\n\r ]+|[\t\f\n\r ]+$/g;
const escape = /[^-0-9A-Z_a-z]/g;
for (const dtElement of dtElements) {
	const textContent = dtElement.textContent.replace(trim);
	const aElement = document.createElement("a");
	aElement.append(...dtElement.childNodes);
	aElement.href = `#${textContent}`;
	dtElement.id = textContent;
	dtElement.append(aElement);
}
for (const aElement of aElements) {
	const textContent = aElement.textContent.replace(trim);
	const id = textContent.replace(escape, (character) => {
		return `\\${character.codePointAt(0).toString(16)} `;
	});
	if (document.querySelector(`dt#${id}`) !== null) {
		aElement.href = `#${textContent}`;
	}
}
