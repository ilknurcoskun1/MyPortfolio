import React from 'react';
import './Project3.css'; // Dosya adını düzenlemeyi unutmayın

function Project3() {
    return (
        <div className="Project3-container">
           
           <h1>Creating Contact Records in Dynamics CRM</h1>
        <p>Learn how to create Contact records in Dynamics CRM using ASP.NET Web Forms and Excel data.</p>

        <h2>Prerequisites</h2>
        <p>Before you begin, make sure you have the following:</p>
        <ul className='custom-list'>
            <li>Visual Studio (or any suitable IDE) for creating ASP.NET Web Forms projects.</li>
            <li>Access to a Dynamics CRM instance where you can create Contact records.</li>
            <li>Basic knowledge of C# programming and ASP.NET Web Forms.</li>
        </ul>

        <h2>Step 1: Create an ASP.NET Web Forms Project</h2>
        <p>Let's start by creating a new ASP.NET Web Forms project in Visual Studio.</p>
        <ul className='custom-list'>
            <li>Open Visual Studio and choose <strong>New Project</strong>.</li>
            <li>Select <strong>ASP.NET Web Forms Application</strong> as the project template.</li>
            <li>Configure the project settings and click <strong>Create</strong>.</li>
        </ul>

        <h2>Step 2: Add File Upload Control and GridView</h2>
        <p>In the ASPX file, add a FileUpload control and a GridView control to the page to handle file uploads and display Contacts.</p>
        <pre className="code-block">
        <code>
          {`<asp:FileUpload ID="fileUpload" runat="server" />
<asp:Button ID="uploadButton" runat="server" Text="Upload File" OnClick="UploadButton_Click" />

<asp:GridView ID="contactGridView" runat="server" AutoGenerateColumns="false">
    <Columns>
        <asp:BoundField DataField="firstname" HeaderText="First Name" />
        <asp:BoundField DataField="lastname" HeaderText="Last Name" />
        <asp:BoundField DataField="emailaddress1" HeaderText="Email" />
        <asp:BoundField DataField="createdon" HeaderText="Creation Date" DataFormatString="{0:yyyy-MM-dd}" />
    </Columns>
</asp:GridView>
`}
        </code>
        </pre>

        <h2>Step 3: Implement the Upload Button Click Event</h2>
        <p>In the code-behind (aspx.cs) file, implement the UploadButton_Click event handler to handle file uploads and create Contact records.</p>
        <pre className="code-block csharp">
        <code>
          {`protected void UploadButton_Click(object sender, EventArgs e)
{
    if (fileUpload.HasFile)
    {
        // Save the uploaded file
        string excelFilePath = Server.MapPath("~/App_Data/" + fileUpload.FileName);
        fileUpload.SaveAs(excelFilePath);

        // Establish a connection to Dynamics CRM
        string connectionString = "AuthType=OAuth;Url=https://<CRM_URL>/;Username=<USERNAME>;Password=<PASSWORD>;";

        CrmServiceClient crmServiceClient = new CrmServiceClient(connectionString);

        if (!crmServiceClient.IsReady)
        {
            resultLabel.Text = "Failed to establish CRM connection.";
            return;
        }

        // Read Contact data from the Excel file and create records in Dynamics CRM
        List<Entity> contacts = ReadContactsFromExcel(excelFilePath);

        foreach (Entity contact in contacts)
        {
            Guid contactId = crmServiceClient.Create(contact);
            resultLabel.Text += "New contact created. Contact ID: " + contactId + "<br/>";
        }

        // Refresh the GridView with the updated Contacts
        BindContactGridView();
    }
    else
    {
        resultLabel.Text = "No file selected.";
    }
}
`}
        </code>
        </pre>

        <h2>Step 4: Bind Contact List to GridView</h2>
        <p>In the same code-behind file, implement the data binding function to populate the GridView with Contact data sorted by creation date.</p>
        <pre className="code-block csharp">
        <code>
          {`protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        BindContactGridView();
    }
}

private void BindContactGridView()
{
    string connectionString = "AuthType=OAuth;Url=https://<CRM_URL>/;Username=<USERNAME>;Password=<PASSWORD>;";

    CrmServiceClient crmServiceClient = new CrmServiceClient(connectionString);

    if (!crmServiceClient.IsReady)
    {
        resultLabel.Text = "Failed to establish CRM connection.";
        return;
    }

    QueryExpression query = new QueryExpression("contact");
    query.ColumnSet = new ColumnSet("firstname", "lastname", "emailaddress1", "createdon");
    query.Orders.Add(new OrderExpression("createdon", OrderType.Descending));

    EntityCollection contacts = crmServiceClient.RetrieveMultiple(query);

    contactGridView.DataSource = contacts.Entities;
    contactGridView.DataBind();
}
`}
        </code>
        </pre>

        <h2>Step 5: Deployment and Testing</h2>
        <p>Deploy your project to a web server or hosting environment.</p>
        <p>Visit the page, upload an Excel file, and observe the Contact list displayed in the GridView. Contacts should be sorted by creation date.</p>
<p>Deploy your project to a web server or hosting environment.</p>
        <p>Visit the page, upload an Excel file, and observe the Contact list displayed in the GridView. Contacts should be sorted by creation date.</p>

        </div>
    );
}

export default Project3;
