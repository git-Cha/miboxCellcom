# miboxCellcom
remote control for cellcom andoid tv box

thanks dima for a great card
https://github.com/dimagoltsman/generic-remote-control-card
i just changed it a bit.

didn’t succeed mapping of 3 buttons: Home,Live,cellcometv.
still trying to find them. any help will be much appreciated

Installtion:
after installing dima's card, create folder called "mibox2":
\\192.168.x.x\config\www\community\generic-remote-control-card\remotes\mibox2
copy the files in this repo to mibox2 folder.

create a new card with this code inside:



entity: media_player.android_tv_livingroom
name: Mibox CellcomTV
remote_template: mibox2
type: 'custom:generic-remote-control-card'
buttons:
  back:
    call: androidtv.adb_command
    data:
      command: input keyevent 4
      entity_id: media_player.android_tv_livingroom
  bottom:
    call: androidtv.adb_command
    data:
      command: input keyevent 20
      entity_id: media_player.android_tv_livingroom
  cellcomtv:
    call: media_player.select_source
    data:
      entity_id: media_player.android_tv_livingroom
      source: com.cellcom.cellcom_tv.stb
  clickleft:
    call: androidtv.adb_command
    data:
      command: input keyevent 21
      entity_id: media_player.android_tv_livingroom
  clickright:
    call: androidtv.adb_command
    data:
      command: input keyevent 22
      entity_id: media_player.android_tv_livingroom
  home:
    call: androidtv.adb_command
    data:
      command: input keyevent 3
      entity_id: media_player.android_tv_livingroom
  live:
    call: androidtv.adb_command
    data:
      command: input keyevent 237
      entity_id: media_player.android_tv_livingroom
  microphone:
    call: androidtv.adb_command
    data:
      command: input keyevent 84
      entity_id: media_player.android_tv_livingroom
  netflix:
    call: media_player.select_source
    data:
      entity_id: media_player.android_tv_livingroom
      source: com.netflix.ninja
  ok:
    call: androidtv.adb_command
    data:
      command: input keyevent 66
      entity_id: media_player.android_tv_livingroom
  power:
    call: androidtv.adb_command
    data:
      command: POWER
      entity_id: media_player.android_tv_livingroom
  top:
    call: androidtv.adb_command
    data:
      command: input keyevent 19
      entity_id: media_player.android_tv_livingroom
  volumedown:
    call: androidtv.adb_command
    data:
      command: input keyevent 25
      entity_id: media_player.android_tv_livingroom
  volumeup:
    call: androidtv.adb_command
    data:
      command: input keyevent 24
      entity_id: media_player.android_tv_livingroom
      
      
good luck      
