
~~ Preparing the build environment ~~

==== Preparing the build environment  ====

The steps below correspond to the preparation of the **EFL native windows** compilation environment.

> [Note!]
> these steps were tested on Windows server 2019 64bit and Windows 10 64bit. 

Except for topic 7 (Environment variables) that can be consulted during the process of preparing the environment, the ideal is that the steps are fulfilled in the proposed order.

    - Visual studio installation
    - Meson
    - Perl
    - PCRE
    - LLVM
    - Openssl
    - Environment variables
    - Compiling the EFL


----

=== 1 - Visual studio installation ===

  * Download the software from the official website: [[https://visualstudio.microsoft.com/|Visual Studio]]

  * Choose the option you want, the most basic and free version is the [[https://visualstudio.microsoft.com/pt-br/thank-you-downloading-visual-studio/?sku=Community&rel=16 |community]]

  * After installation add the build package for c and c ++

  * If there is no list of options for including the package, complete the 
    installation and locate in the Start Menu Virtual Studio Installer, you ca 
    add the package to c / c ++, update or check if it was successfully 
    installed.

----

=== 2 - Meson ===

2.1. Install the [[https://pypi.org/project/meson/|MESON]] using the following command on the terminal:

<code>
>pip istall meson
</code>

> The version of mesmon used in this tutorial is the **0.53.2**, it is possible to directly install this version as follows `pip install meson==0.52.2` to check the installed summer use: `meson --version` or use `pip freeze` to check all installed packages and their versions.

> Check the python summer installed on your Windows, in this tutorial we are using Python 3.8

 2.2. At the end of the previous step, open a new terminal, type the command below and press enter:

<code>
>meson
</code>
The result should look like this:
<code>
>ERROR: Must specify at least one directory name
</code>
If the command is not recognized, finish the environment variables step, and try again, the documentation can be found at: [[https://pypi.org/project/meson/|MESON.]]


----

=== 3 - Perl===


3.1. The version used in this tutorial was the **strawberry-perl-5.30.2.1-64bit.msi**, Download it here: [[http://strawberryperl.com/|Download Perl.]]

3.2. Install in: C:\Strawberry/.

----

=== 4 - PCRE===

4.1. download PCRE, the version used in this tutorial is that of March 23, 2007, the version can be found at: [[http://gnuwin32.sourceforge.net/packages/pcre.html|Download PCRE.]], in the section: **Developer files**.

4.2. After the download, extract the files in a directory of your choice, in this case, extract in: `C:\Users\ricardo.campos\AppData\Local\efl\pcre`.

> Add the environment variables according to the section: **7 - Windows Environment Variables**

----

===5 - LLVM===

5.1. Download the LLVM, the version used in this tutorial is 9.0.1, both this section and the higher versions can be found at: [[https://github.com/llvm/llvm-project/releases/|LVVM Download.]].

> Upon entering the corresponding section with the chosen version, a file with the following description (in this case with version 9.0.1) must be located: ``LLVM-9.0.1-win64.exe``, download this file.

5.2. when installing, it is important to select at least one of the options below:

>[x] Add LLVM to the system PATH for all users.
>[x] Add LLVM to thr system PATH for current user.

In this case we install in `C:\Program Files\LLVM`.

----

===OpenSSL===

6.1. Clone or download the **OpenSSL** in: [[https://github.com/openssl/openssl|Download Openssl]].

6.2. Downlaod the **NASM** in: [[https://www.nasm.us/|Download NASM]].

> Add **NASM** Windows environment variables, see the guide: - 7 Environment variables.

6.3. After installing NASM, Open the OpenSSL directory in visual studio, in the Visual Studio file explorer, right-click on the OpenSSL root directory and select the option: **Open Developer Command Prompt**
> Check that the terminal that was opened is running on 64bit version.

In this step, type the following command in the terminal:

<code>
>perl5.30.1.exe Configure VC-WIN64A --prefix=C:/Users/<your_user_name>/AppData/Local/efl/OpenSSL --openssldir=C:/User/<your_user_name>/AppData/Local/efl/openssldir
</code>

>Caso não saiba  a versão correta do PERL instalado, digite o seguinte comando no terminal e pressione enter:
<code>
>perl --version
</code>

6.4.Chegou a hora de compilar a OpenSSL, no mesmo prompt de comando aberto anteriormente, digite o seguinte comando para compilar: 

<code>
>nmake
</code>

The file [[https://github.com/openssl/openssl/blob/master/INSTALL.md|INSTALL.md]] can be consulted if there is a problem during installation, or if you have any questions.

----

=== 7 Windows Environment Variables ===

  * This module is aimed at checking environment variables:
==python==
    * During python installation, you can select the option to add python environment variables automatically, if there is a problem with MESON, delete the existing variables and add as shown below.
    * For the conference, we are using `Python 3.8` for this tutorial
    * Open the windows environment variable editor, for the variables corresponding to the user, locate **`path`** and two clicks, in the next window, click new and add the following variables:
        * <code>C:\Users\<seu-usuário>\AppData\Roaming\Python\Python38\Scripts</code>
        * <code>C:\Python38</code>
        * <code>C:\Python38\Scripts</code>
        * Don't forget to edit the path name, according to the location of your python installation.
    
    
==NASM==
    * Add ==NASM== to the environment variables as follows: 
        * Open the windows environment variable editor, for the variables corresponding to the user, locate **`path`** and two clicks, in the next window, click new and add the following path_name: 
            * <code>C:\Users\<your_user_name>\AppData\Local\efl\NASM</code>
            * Do not forget to edit the path name, according to the location of your installation.
    
==OpenSSL==
    * Add the following environment variable for OpenSSL: 
    * Open the windows environment variable editor, for the variables corresponding to the user, click **NEW**:
        * In **Variable name** add the following name:
            * <code>OPENSSL_DIR</code>
        * In **Variable value** add the following path:   
            * <code>C:\Users\<your_user_name>\AppData\Local\efl\openssl</code>
            * do not forget to edit the path name, according to the location of your installation.
    
    

==PCRE==
    * Add the following environment variable for PCRE:

    - Open the windows environment variable editor, for the variables corresponding to the user, click **NEW**:
        * In **Variable name** add the following name:
            *<code>REGEX_DIR</code>
        * In **Variable value** add the following path:
            *<code>C:\Users\<your_user_name>\AppData\Local\efl\pcre\lib</code>
            *do not forget to edit the path name, according to the location of your installation.
    - Open the windows environment variable editor, for the variables corresponding to the user, click **NEW**:
        * In **Variable name** add the following name:
            *<code>REGEX_INCLUDE_DIR</code>
        * In **Variable value** add the following path:
            *<code>C:\Users\<your_user_name>\AppData\Local\efl\pcre\include</code>
            * Do not forget to edit the path name, according to the location of your installation.
            

----

===8 - Compiling the EFL===

    * Choose a directory to clone **EFL NATIVE WINDOWS** files
        > Search for directories that have no space in the name
    * Clone the repository at: [[https://github.com/expertisesolutions/efl.git|Repositório Efl NAtive Windows]].
    * Open a command prompt in the EFL directory, run the following command:  
        * <code>>configure.bat</code>      
    * If an error occurs in this step, enter the following command:  
        * <code>>"C:\Program Files (x86)\Microsoft Visual   Studio\2019\Community\VC\Auxiliary\Build\vcvars64.bat"</code>   
        *[1] The path may vary depending on the version of Visual Studio used.
        *[2] Try again, and if you still have errors, check the environment variables again, remember that at each modification it is necessary to restart the command prompt.
    * After you finish executing **configure.bat** execute **build.bat**:
         * <code>>build.bat</code>