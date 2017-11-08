
ASC_FLAGS :=

test: hello.wasm
	node index.js

hello.wasm: hello.ts
	npx asc -c tsconfig.json -o $@ $<

clean:
	rm *.wasm
