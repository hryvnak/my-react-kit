import { useState } from 'react';
import Button from '../components/Button/Button';
import DemoSection from '../components/DemoSection/DemoSection';
import Demo from '../components/Demo/Demo';
import { Link } from "react-router-dom";

const ReactButton = () => {
	// Для кнопки Завантажити файл/и
	const [files, setFiles] = useState([]);

	const uploadFiles = (e) => {
		const files = e.target.files;
		// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#array-like
		const filesArr = Array.prototype.slice.call(files);
		setFiles(filesArr);
	}

	const removeFile = (fileName) => (e) => {
		const filtered = files.filter(i => i !== fileName);
		setFiles(filtered);
	}
  return (
		<section>
			<div className='container'>
				<h1>Button</h1>
				<DemoSection heading="Basic button">
					<p>Button має три варіанти: text, contained (за замовчуванням), і outlined.</p>
					<Demo>
						<Button type="button" variant="text" text="Text" />
						<Button type="button" variant="contained" text="Contained" />
						<Button type="button" variant="outlined" text="Outlined" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Text button">
					<Demo>
						<Button type="button" variant="text" text="Text" />
						<Button type="button" variant="text" text="Disabled" disabled />
						<Button href="/" variant="text" text="Link" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Contained button">
					<Demo>
						<Button type="button" variant="contained" text="Contained" />
						<Button type="button" variant="contained" text="Disabled" disabled />
						<Button href="/" variant="contained" text="Link" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Outlined button">
					<Demo>
						<Button type="button" variant="outlined" text="Outlined" />
						<Button type="button" variant="outlined" text="Disabled" disabled />
						<Button href="/" variant="outlined" text="Link" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Кольори">
					<Demo chunkSize="6">
						<Button type="button" variant="text" color="primary" text="Primary" />
						<Button type="button" variant="text" color="secondary" text="Secondary" />
						<Button type="button" variant="text" color="error" text="Error" />
						<Button type="button" variant="text" color="warning" text="Warning" />
						<Button type="button" variant="text" color="info" text="Info" />
						<Button type="button" variant="text" color="success" text="Success" />
						<Button type="button" variant="contained" color="primary" text="Primary" />
						<Button type="button" variant="contained" color="secondary" text="Secondary" />
						<Button type="button" variant="contained" color="error" text="Error" />
						<Button type="button" variant="contained" color="warning" text="Warning" />
						<Button type="button" variant="contained" color="info" text="Info" />
						<Button type="button" variant="contained" color="success" text="Success" />
						<Button type="button" variant="outlined" color="primary" text="Primary" />
						<Button type="button" variant="outlined" color="secondary" text="Secondary" />
						<Button type="button" variant="outlined" color="error" text="Error" />
						<Button type="button" variant="outlined" color="warning" text="Warning" />
						<Button type="button" variant="outlined" color="info" text="Info" />
						<Button type="button" variant="outlined" color="success" text="Success" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Розміри">
					<p>Button має три розміри: small, medium(за замовчуванням), large.</p>
					<Demo chunkSize="3">
						<Button type="button" variant="text" size="small" text="Small" />
						<Button type="button" variant="text" size="medium" text="Medium" />
						<Button type="button" variant="text" size="large" text="Large" />
						<Button type="button" variant="contained" size="small" text="Small" />
						<Button type="button" variant="contained" size="medium" text="Medium" />
						<Button type="button" variant="contained" size="large" text="Large" />
						<Button type="button" variant="outlined" size="small" text="Small" />
						<Button type="button" variant="outlined" size="medium" text="Medium" />
						<Button type="button" variant="outlined" size="large" text="Large" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Upload кнопка">
					<p>Спробуйте завантажити файл</p>
					<Demo>
						<Button htmlFor="namedInput" component="label" variant="contained" size="medium" text="Upload" >
							<input onChange={ uploadFiles } type="file" multiple id="namedInput" />
						</Button>
						{
							(files.length) 
							? 
							<div className='files'>
								{ files.map((file) => <span className='filename' onClick={ removeFile(file) }>{ file.name }</span>) }
							</div>
							:
							null
						}	
					</Demo>
				</DemoSection>
				<DemoSection heading="Іконка на початку кнопки">
					<Demo chunkSize="3">
						<Button type="button" startIcon="icon-phone" variant="text" size="small" text="Small" />
						<Button type="button" startIcon="icon-phone "variant="text" size="medium" text="Medium" />
						<Button type="button" startIcon="icon-phone" variant="text" size="large" text="Large" />
						<Button type="button" startIcon="icon-phone" variant="contained" size="small" text="Small" />
						<Button type="button" startIcon="icon-phone" variant="contained" size="medium" text="Medium" />
						<Button type="button" startIcon="icon-phone" variant="contained" size="large" text="Large" />
						<Button type="button" startIcon="icon-phone" variant="outlined" size="small" text="Small" />
						<Button type="button" startIcon="icon-phone" variant="outlined" size="medium" text="Medium" />
						<Button type="button" startIcon="icon-phone" variant="outlined" size="large" text="Large" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Іконка в кінці кнопки">
					<Demo chunkSize="3">
						<Button type="button" endIcon="icon-phone" variant="text" size="small" text="Small" />
						<Button type="button" endIcon="icon-phone" variant="text" size="medium" text="Medium" />
						<Button type="button" endIcon="icon-phone" variant="text" size="large" text="Large" />
						<Button type="button" endIcon="icon-phone" variant="contained" size="small" text="Small" />
						<Button type="button" endIcon="icon-phone" variant="contained" size="medium" text="Medium" />
						<Button type="button" endIcon="icon-phone" variant="contained" size="large" text="Large" />
						<Button type="button" endIcon="icon-phone" variant="outlined" size="small" text="Small" />
						<Button type="button" endIcon="icon-phone" variant="outlined" size="medium" text="Medium" />
						<Button type="button" endIcon="icon-phone" variant="outlined" size="large" text="Large" />
					</Demo>
				</DemoSection>
				<DemoSection heading="Іконка">
					<Demo>
						<Button iconButton="icon-phone" type="button" variant="text" size="small" color="error" aria-label="Передзвоніть мені" />
						<Button iconButton="icon-phone" type="button" variant="contained" size="medium" color="info" aria-label="Передзвоніть мені" />
						<Button iconButton="icon-phone" type="button" variant="outlined" size="large" color="secondary" aria-label="Передзвоніть мені" />
					</Demo>
				</DemoSection>
				<p>Посилання на API:</p>
				<Link to="/api/button" className="btn">Api Button</Link>
			</div>
		</section>
  );
};
export default ReactButton;
