var cc = 'Toastmasters club in City'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Toastmasters club in City is not mentioned.");
}

var cc = 'StateProvince'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - StateProvince is not mentioned.");
}

var cc = 'Postal code'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Postal code is not mentioned.");
}

var cc = 'Country'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Country is not mentioned.");
}

var cc = 'Date'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Date is not mentioned.");
}

var cc = 'Permission'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Premission option is not checked.");
}

var cc = 'Date_2'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Date is not mentioned.");
}

var cc = 'Coordinator or presidents name'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Coordinator or presidents name is not mentioned.");
}

var cc = 'Address 1'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Club address is not mentioned.");
}

var cc = 'City'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - City name of club address is not mentioned.");
}

var cc = 'StateProvince_2'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - StateProvince of club address is not mentioned.");
}

var cc = 'Country_2'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Country of club address is not mentioned.");
}

var cc = 'Postal code_2'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Postal code of address is not mentioned.");
}

var cc = 'Phone'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 1 - Phone number is not mentioned.");
}
var cEmail = 'Email';
var nEmail = this.getField(cEmail).value;

if (nEmail == "")
{
    app.alert("Email information is not added in pdf.");
}
var cc = 'Group4'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 2 - Club Type is not selected.");
}

var cc = 'Club number'
var dd = 'Club number_2'
var ncc = this.getField(cc).value;
var ndd = this.getField(dd).value;
if (ncc == "" ) or (ndd == "")
{
    app.alert("Page 2 - Club number of sponsoring club is not mentioned.");
}

var cc = 'Name'
var dd = 'Name_2'
var ncc = this.getField(cc).value;
var ndd = this.getField(dd).value;
if (ncc == "") or (ndd == "")
{
    app.alert("Page 2 - Individual toastmaster sponsor's name is not mentioned.");
}

var cc = 'Member number'
var dd = 'Member number_2'
var ncc = this.getField(cc).value;
var ndd = this.getField(dd).value;
if (ncc == "") or (ndd == "")
{
    app.alert("Page 2 - Individual toastmaster sponsor's member number is not mentioned.");
}

var cc = 'Name_3'
var dd = 'Name_4'
var ncc = this.getField(cc).value;
var ndd = this.getField(dd).value;
if (ncc == "") or (ndd == "")
{
    app.alert("Page 2 - Individual toastmaster mentor's name is not mentioned.");
}

var cc = 'Member number_3'
var dd = 'Member number_4'
var ncc = this.getField(cc).value;
var ndd = this.getField(dd).value;
if (ncc == "") or (ndd == "")
{
    app.alert("Page 2 - Individual toastmaster mentor's member number is not mentioned.");
}

var cc = 'New club alignment District'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 2 - District information is not mentioned.");
}


var cc = 'Division'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 2 - Division information is not mentioned.");
}


var cc = 'Area'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Page 2 - Area information is not mentioned.");
}


/*
# Why fields are seen in red block
# what does validate button do
3. Validate button is not visible
4. Validate button is not working
*/
//email 

var re = /^\S+@\S+\.\w{3}$/
var re2 = /^\w+([-_]\w+)*@\w+(\.\w{2,3})+$/

if (re.test(event.value) == false) {
app.alert("\"" + event.value + "\" is not a valid email address.")
app.beep()
}

//RADIO

var cc = 'Form 3 - Radio Button5'
var ncc = this.getField(cc).value;
if (ncc == "Off")
{
app.alert("Page 1 - Applicant information is not checked.");

}


var cc = 'Club name'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert("Club name is not mentioned.");
}

var cc = 'State'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert(“City,  State & Country is not mentioned.");
}

var cc = 'Day'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert(“Day is not mentioned.");
}


var cc = 'Month'
var ncc = this.getField(cc).value;
if (ncc == "")
{
app.alert(“Month is not mentioned.");

} 

var cc = 'Year'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert(“Page 2 - Year is not mentioned.");
}

var cc = 'Date'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert(“Date before the club president’s signature is not mentioned.");
}

var cc = ‘Date_2'
var ncc = this.getField(cc).value;
if (ncc == "")
{
    app.alert(“Date before the club secretary’s signature is not mentioned.");
}

//javascript
              
var reExp = /^([^0-9]*)$/;
if (event.value == “” || (event.value.length < 2 || !(reExP.test(event.value))))
{
	if(event.value == “”)
	{	
		app.alert(“Name is Required”);
	}
	else if(event.value.length < 2 && !(reExp.test(event.value)))
	{
		app.alert(“Name must be at least 2 characters and non numeric”);
	}
	else if(event.value.length < 2)
	{
		app.alert(“Name must be at least 2 characters”);
	}
	else if(!(reExp.test(event.value)))
	{
		app.alert(“Please Enter non numeric values.”);
	}
}


if (event.willCommit) 
{

try 
{
// Get the data contents of the "employees" attachment
var oDB = this.getDataObjectContents("employees");
// Convert to a string
var cDB = util.stringFromStream(oDB);
// Use the eval method to evaluate the string, you get an XML variable
var employees = eval(cDB);
// Retrieve record with the id input in the employee.id field
var record = employees.employee.(@id == event.value);
// If the record is an empty string, or there was nothing entered...

// Populate the two other fields
this.getField("employee.name.first").value = record.name.first;
this.getField("employee.name.last").value = record.name.last;
} catch(e) {
app.alert("The DB is not attached to this document!");
event.rc = false;
}
}

var field2 = this.getField(“Form 1 - Country”)
Form 1 - Toastmasters Club's City
Form 1 - Country

f.strokeColor = color.blue;

var v = this.getField("Form 1 - Toastmasters Club's City").value; 
if (v == “”)
{
	app.alert(“Club Name is Required”)
}


// Get the contents of the file attachment with the name "MyNotes.txt" 
var oFile = this.getDataObjectContents("MyNotes.txt"); 
// Convert the returned stream to a string 
var cFile = util.stringFromStream(oFile, "utf-8"); 
// Append new data at the end of the string 
cFile += "\r\n" + v; 
// Convert back to a stream
 oFile = util.streamFromString( cFile, "utf-8"); 
// Overwrite the old attachment 
this.setDataObjectContents("MyNotes.txt", oFile); 
// Read the contents of the file attachment to a multiline text field var oFile = this.getDataObjectContents("MyNotes.txt"); var cFile = util.stringFromStream(oFile, "utf-8"); this.getField("myTextField").value = cFile; Beginning with Acrobat 8, the JavaScript interpreter includes E4X, 

/*
Toastmasters club in City
StateProvince
Postal code
Country
Date
Permission
Signed
Date_2
Coordinator or presidents name
Address 1
City
StateProvince_2
Country_2
Postal code_2
Phone
Email
Group4
Club number
Club number_2
Name
Member number
Name_2
Member number_2
Name_3
Name_4
Member number_3
Member number_4
New club alignment District
Division
Area
*/
    
function validate(phone) {
    var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (regex.test(phone)) {
        // Valid international phone number
    } else {
        // Invalid international phone number
    }
}


var re = /^\S+@\S+\.\w{3}$/
var re2 = /^\w+([-_]\w+)*@\w+(\.\w{2,3})+$/

if (re.test(event.value) == false) {
app.alert("\"" + event.value + "\" is not a valid email address.")
app.beep()
}

var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
if (regex.test(event.value) == false) {
app.alert("\"" + event.value + "\" is not a valid international phone number.")
app.beep()
}

/*
(123) 456-7890
+(123) 456-7890
+(123)-456-7890
+(123) - 456-7890
+(123) - 456-78-90
123-456-7890
123.456.7890
1234567890
+31636363634
075-63546725
*/
    
//var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
var regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
//var regex = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
if (regex.test(event.value) == false)
 {
app.alert("\"" + event.value + "\" is not a valid international phone number.")
app.beep()
}


// 
    Please fill '-' or 'NA' where the field is not applicable instead of leaving it blank.