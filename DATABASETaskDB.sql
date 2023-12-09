CREATE DATABASE TaskDB
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
USE TaskDB

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeName] [varchar](100) NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Employee] ADD  CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[TaskName] [nvarchar](50) NULL,
	[TaskDescription] [nvarchar](max) NULL,
	[EmployeeId] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeTask] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[Employee] ([EmployeeId])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_EmployeeTask]
GO
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [TaskDB].[dbo].[Employee] (EmployeeId, EmployeeName) VALUES
(1, 'Stella'),
(2, 'Jane Smith'),
(3, 'Bob Johnson'),
(4, 'Miriam'),
(5, 'James')
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetTaskAndEmployees]
AS
BEGIN
    Select T.TaskName,T.TaskDescription,E.EmployeeName FROM
    Task T Left Outer JOIN Employee E on t.EmployeeId=e.EmployeeId
    
END
GO

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[InsertTask]
    @TaskName NVARCHAR(50),
    @TaskDescription NVARCHAR(MAX),
    @EmpName NVARCHAR(255)
AS
BEGIN
    DECLARE @EmployeeID INT

    -- Get the EmployeeID based on EmpName
    SELECT @EmployeeID = EmployeeID
    FROM Employee
    WHERE EmployeeName = @EmpName

    -- Insert into Task table
   
    INSERT INTO Task (TaskName, TaskDescription, EmployeeId)
    VALUES (@TaskName, @TaskDescription, @EmployeeID)

END
GO


