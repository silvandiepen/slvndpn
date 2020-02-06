<template>
	<main class="page page--projects">
		<PageHeading>
			<h1>Everyone has it's own preferences.. These are mine.</h1>
			<p>
				That doesn't mean I always work with this or can't adopt. I just like
				this..
			</p>
		</PageHeading>

		<div class="row small-full medium-half">
			<PageBlock class="column background--plum">
				<h2>JavaScript</h2>

				<InputOptions
					:options="[
						{ label: '&#34;double&#34;', value: false },
						{ label: `&#39;single&#39;`, value: true }
					]"
					label="Quotes"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: '↦  tabs', value: true },
						{ label: '···spaces', value: false }
					]"
					label="Spacing"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: 'Arrow => ()', value: true },
						{ label: 'function Name()', value: false }
					]"
					label="Functions"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: 'FunctionName()', value: false },
						{ label: 'functionName()', value: true },
						{ label: 'function-name()', value: false }
					]"
					label="Function naming"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: 'ComponentName.js', value: false },
						{ label: 'componentName.js', value: false },
						{ label: 'component-name.js', value: true },
						{ label: '_component-name.js', value: false }
					]"
					label="File name"
					group="stack"
				/>
				<!--
				<InputCheck>Semicolons</InputCheck>
				<InputOptions :options="options.quotes" label="Quotes" group="inline" />
				<InputOptions
					:options="options.quotes"
					label="Quotes"
					group="inline-space"
				/>
				<InputOptions :options="options.quotes" label="Quotes" group="stack" />
				<InputOptions
					:options="options.quotes"
					label="Quotes"
					group="stack-space"
				/>
				<InputRadio>Something</InputRadio>
				<InputRadios :options="options.quotes" label="Quotes" /> -->
			</PageBlock>
			<PageBlock class="column background--bluedark">
				<h2>Styling</h2>
				<InputOptions
					multi
					:options="[
						{ label: 'CSS', value: true },
						{ label: 'Sass/SCSS', value: true },
						{ label: 'Less', value: false },
						{ label: 'Stylus', value: false },
						{ label: 'CSS-in-js', value: false }
					]"
					label="Language"
					group="stack"
				/>
				<InputChecks
					:options="[
						{ label: 'BEM', value: true },
						{ label: 'SMACSS', value: false },
						{ label: 'OOCSS', value: false },
						{ label: 'SUIT CSS', value: false },
						{ label: 'Systematic CSS', value: false }
					]"
					group="inline"
					label="Methodology"
				/>
				<InputOptions
					:options="[
						{ label: '&#34;double&#34;', value: true },
						{ label: `&#39;single&#39;`, value: false }
					]"
					label="Quotes"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: '#000', value: false },
						{ label: '#000000', value: true },
						{ label: 'black', value: false }
					]"
					label="Color values"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: '.ComponentName {', value: false },
						{ label: '.componentName {', value: false },
						{ label: '.component-name {', value: true }
					]"
					label="Class Case"
					group="inline"
				/>
				<InputOptions
					:options="[
						{ label: 'ComponentName.scss', value: false },
						{ label: 'componentName.scss', value: false },
						{ label: 'component-name.scss', value: false },
						{ label: '_component-name.scss', value: true }
					]"
					label="File name"
					group="stack"
				/>
			</PageBlock>
		</div>
	</main>
</template>
