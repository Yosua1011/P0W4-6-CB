class Student {
	constructor (name, age, dateOfBirth, gender, studentID, hobbies) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.studentID = studentID;
		this.hobbies = hobbies;
	}

	setName (newName) {
		this.name = newName;
	}

	setAge (newAge) {
		this.age = newAge;
	}

	setDateOfBirth (newDate) {
		this.dateOfBirth = newDate;
	}

	setGender (newGender) {
		if (newGender === 'Male' || newGender === 'Female') {
			this.gender = newGender;
		} else {
			this.gender = 'Gender Tidak Terdaftar';
		}
	}

	addHobby (newHobby) {
		this.hobbies.push(newHobby);
	}

	removeHobby (removeHobby) {
		for (let i=0; i < this.hobbies.length; i++) {
			if (this.hobbies[i] === removeHobby) {
				this.hobbies.splice(i,1);
			}
		}
	}

	getData(){
		console.log('Nama : ' + this.name);
		console.log('Umur : ' + this.age);
		console.log('Tanggal Lahir : ' + this.dateOfBirth);
		console.log('Gender : ' + this.gender);
		console.log('Student ID : %s',this.studentID);
		console.log('Hobbies : ');
		for (let i=0; i<this.hobbies.length; i++) {
			console.log('Hobi '+(i+1)+' adalah '+this.hobbies[i]);
		}
	}
}

let student1 = new Student('Yosua',12,'10 November 1994','Male','I10',['Coding','Drone']);
console.log('Original Data');
student1.getData();
console.log('\nPercobaan Merubah Data');
student1.setName('LOL');
student1.setAge('22');
student1.setDateOfBirth('14 Oktober 1994');
student1.setGender('Female');
student1.removeHobby('Drone');
student1.addHobby('Writing');
student1.getData();