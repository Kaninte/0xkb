# OS Install Microsoft
Reference material for installing Microsoft Windows, including workarounds for installation restrictions, bypassing hardware requirements, and license activation methods.

Windows is a family of operating systems developed by Microsoft, designed for personal computers, servers, and enterprise environments. 

## Windows 11

### Install without MS Account
> Allows you bypass the requirements that force you to install Windows 11 using a Microsoft account.

**Step 1**  
Follow the install process until you get to the "choose a country" screen.

**Step 2**  
Disable internet requirements. Hit **Shift + F10** to bring up a command prompt. Type `OOBE\BYPASSNRO` this will disable the network requirement and restart.

**Step 3**  
Disconnect the internet. Remove the ethernet plug from your computer ***OR*** hit **Shift + F10** and type `ipconfig /release`. this will disconnect your computer from the internet.

**Step 4**  
Continue with installation till it asks you to connect to a network.

**Step 5**  
Select the "I don't have Internet" option. If asked to connect again, "continue with limited setup".

**Step 6**  
Finish the setup, creating a local account.

**Step 7**  
Once windows is installed open up CMD and run `ipconfig /renew` to reenable internet access.

### Bypass TPM Requirements

**Step 1**  
Start the installation process until you get to the screen that says "your PC can't run Windows 11".

**Step 2**  
Press **Shift + F10** to open a terminal. Type `regedit` to bring up the registry editor.

**Step 3**  
Navigate to `HKEY_LOCAL_MACHINE\SYSTEM\Setup`.

**Step 4**  
Create a new key called `LabConfig` and another called `MoSetup`.

**Step 5**  
Create the following DWORD entries in `LabConfig`:  
`BypassTPMCheck` = 1  
`BypassSecureBootCheck` = 1  
`BypassCPUCheck` = 1  
`BypassRAMCheck` = 1  
  
Create the following DWORD entries in `MoSetup`:  
`AllowUpgradesWithUnsupportedTPMOrCPU` = 1


### Microsoft Activation Scripts (MAS)
```diff
- For educational purposes only
```
> Open-source Windows and Office activator featuring HWID, Ohook, KMS38, and Online KMS activation methods.

**Step 1**  
Open PowerShell (not CMD).

**Step 2**  
Run the command:  
```irm https://get.activated.win | iex```
