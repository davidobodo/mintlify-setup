import { MintlifyWidget } from "@mintlify/widget-react";

function App() {
	return (
		<>
			<h1>Sample Mintlify react widget setup</h1>
			<MintlifyWidget
				connection={{
					apiKey: "your api key",
				}}
				display={{
					trigger: {
						iconOnly: true,
						type: "button",
					},
					isDarkMode: false,
				}}
			/>
		</>
	);
}

export default App;
