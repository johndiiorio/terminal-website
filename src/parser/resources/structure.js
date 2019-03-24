const executableContents = btoa('Congratulations on finding this hidden easter egg');

export default {
	directories: {
		home: {
			directories: {
				johndiiorio: {
					directories: {
						Documents: {
							directories: {},
							files: {},
						},
						Pictures: {
							directories: {},
							files: {
								'Me.png': {
									type: 'image',
									contents: 'https://i.imgur.com/WtMRa3C.jpg',
								},
							},
						},
						Projects: {
							directories: {},
							files: {
								'Cool-Project.txt': {
									type: 'text',
									contents: 'Test project',
								},
								'Another cool project.txt': {
									type: 'text',
									contents: 'Test project 2',
								},
								'A boring terminal project': {
									type: 'text',
									contents: 'Press return to begin',
								},
							},
						},
					},
					files: {
						'readme.txt': {
							type: 'text',
							contents: 'Welcome to John DiIorio\'s terminal website. Type "help" for help.',
						},
					},
				},
				'lost+found': {
					directories: {},
					files: {},
				},
			},
			files: {},
		},
		usr: {
			directories: {
				bin: {
					directories: {},
					files: {
						cat: {
							type: 'executable',
							contents: executableContents,
						},
						cd: {
							type: 'executable',
							contents: executableContents,
						},
						clear: {
							type: 'executable',
							contents: executableContents,
						},
						file: {
							type: 'executable',
							contents: executableContents,
						},
						help: {
							type: 'executable',
							contents: executableContents,
						},
						ls: {
							type: 'executable',
							contents: executableContents,
						},
						man: {
							type: 'executable',
							contents: executableContents,
						},
						pic: {
							type: 'executable',
							contents: executableContents,
							nonStandard: true,
						},
						pwd: {
							type: 'executable',
							contents: executableContents,
						},
						whoami: {
							type: 'executable',
							contents: executableContents,
						},
					},
				},
				etc: {
					directories: {},
					files: {},
				},
				include: {
					directories: {},
					files: {},
				},
				lib: {
					directories: {},
					files: {},
				},
				lib32: {
					directories: {},
					files: {},
				},
				local: {
					directories: {},
					files: {},
				},
				share: {
					directories: {},
					files: {},
				},
				src: {
					directories: {},
					files: {},
				},
			},
			files: {},
		},
		etc: {
			directories: {},
			files: {},
		},
		dev: {
			directories: {},
			files: {},
		},
		mnt: {
			directories: {},
			files: {},
		},
		proc: {
			directories: {},
			files: {},
		},
		run: {
			directories: {},
			files: {},
		},
		srv: {
			directories: {},
			files: {},
		},
		tmp: {
			directories: {},
			files: {},
		},
		var: {
			directories: {},
			files: {},
		},
		boot: {
			directories: {},
			files: {},
		},
		'lost+found': {
			directories: {},
			files: {},
		},
		opt: {
			directories: {},
			files: {},
		},
		sys: {
			directories: {},
			files: {},
		},
	},
	files: {},
};
