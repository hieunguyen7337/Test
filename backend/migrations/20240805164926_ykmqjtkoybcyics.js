'use strict';

/**
 * Migration: 20240805164926_ykmqjtkoybcyics
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('cdeykkeeqa', function(table) {
    table.boolean('xihlzhowdq');
    table.integer('jiguimiesp');
    table.boolean('osxtzjwkdn');
    table.json('lqsnqzrmcj');
    table.string('leudunfthf');
    table.boolean('nnncdivsie');
    table.float('oydbefnsbw');
    table.json('vncfhfsgkl');
    table.json('uiqjiofldr');
    table.string('dzorylxmul');
  });
  await knex.schema.alterTable('zbbqsvgkea', function(table) {
    table.string('ehxtimxtzw');
    table.float('zkjyhzgfag');
    table.float('imijeydous');
    table.integer('ivsrqzowcw');
    table.integer('ybfzosrtnn');
    table.integer('bpspqinbck');
    table.float('sicnbptmiq');
    table.text('lnaubqnomi');
  });
  await knex.schema.alterTable('jxtraxmqrd', function(table) {
    table.timestamp('dpfwomvmhv');
    table.text('hppfmortwo');
    table.bigInteger('cusvouybok');
    table.text('sgbdwmxcpz');
    table.text('ygmqhpcudf');
  });
  await knex.schema.alterTable('cxuvaubwxx', function(table) {
    table.boolean('khkbfcsjla');
    table.float('ptnuonrvhb');
    table.bigInteger('imzekcsvrf');
    table.bigInteger('yvvzqewcfo');
    table.float('diwkrhqdll');
    table.string('oagyvtuhzb');
    table.float('fwzhqwyzxw');
    table.float('qunyqeyaso');
    table.integer('bmnbuohkzc');
  });
  await knex.schema.alterTable('olnldowftw', function(table) {
    table.bigInteger('iggwlwqpma');
    table.timestamp('xzkadwusje');
    table.timestamp('ijddikyvvs');
    table.text('czlgynppsz');
    table.json('pqarzglhoo');
    table.string('jqthkkorgg');
    table.boolean('vfarwadxhi');
    table.json('vtkfvlzlst');
    table.json('aiwjbwoscx');
    table.boolean('rqgdvcrouq');
  });
  await knex.schema.alterTable('vucgjmkbun', function(table) {
    table.timestamp('wegaviuvqv');
    table.string('hifcntzjim');
    table.timestamp('gnwbmehluq');
    table.integer('ddmyophtgx');
    table.bigInteger('jjirzzylzh');
    table.string('odvdsodqub');
  });
  await knex.schema.alterTable('qjjtzktifx', function(table) {
    table.json('ivcwlrpkvx');
    table.bigInteger('auhkikvdaf');
    table.text('yeraxguphq');
    table.timestamp('hfikvlwcpp');
    table.timestamp('thenrwkphi');
    table.float('fjlypvwljg');
    table.json('sqbgumjfif');
  });
  await knex.schema.alterTable('gyzjbvmhae', function(table) {
    table.bigInteger('aszlsmfhpp');
    table.integer('xuxtjyhdew');
    table.string('gynrtfldyw');
    table.json('lbikcuntcr');
  });
  await knex.schema.alterTable('zvwnrlqchj', function(table) {
    table.float('tqstegvhjz');
    table.timestamp('szmuutdpvo');
    table.text('poofkytxkc');
    table.bigInteger('zzqhqtowcq');
    table.float('pakbqqdwol');
    table.text('kxhjorwjtd');
    table.float('jgvmsecpfd');
  });
  await knex.schema.alterTable('ycdhekqgfz', function(table) {
    table.bigInteger('vszgqnrudk');
    table.string('edsxquzemg');
    table.bigInteger('aplmbftcud');
    table.string('mphyzmzoin');
    table.text('ipbbptmnkv');
    table.bigInteger('yqwfkzrxkm');
    table.integer('dxjtuzmzgk');
    table.text('wklenvgcvw');
    table.bigInteger('wjzjvsmxkh');
    table.boolean('yfbnyhqpdx');
  });
  await knex.schema.alterTable('jnacbxavkt', function(table) {
    table.float('cqlozpppdb');
    table.string('puiezryyjb');
    table.text('kaxuiddzld');
    table.float('fvdidhranb');
    table.string('khufeybunn');
    table.float('fzzecsrlbn');
    table.integer('orcsrhbsnp');
  });
  await knex.schema.alterTable('mncquuatef', function(table) {
    table.text('mkahbyvixo');
    table.boolean('xnemaroiwm');
    table.bigInteger('czbwlqcggo');
    table.bigInteger('uuokcqnvcr');
    table.text('gzzwmsrnkx');
    table.json('mecopnxvai');
    table.boolean('onwskuqtfh');
    table.float('nrlutihjqs');
    table.text('pfhrfstjyj');
    table.float('bkdfmghlkr');
  });
  await knex.schema.alterTable('xerzpynwft', function(table) {
    table.text('akgdacsmma');
    table.timestamp('ytzwpiofna');
    table.bigInteger('washgtkwru');
    table.bigInteger('wehwvbozpc');
    table.boolean('sulzblrquz');
    table.json('ybftzbzwhi');
  });
  await knex.schema.alterTable('hndttnwwms', function(table) {
    table.bigInteger('yevjcdttob');
    table.boolean('nyuesdfxgh');
    table.string('qgvmgfikqa');
    table.boolean('fqpdttvydf');
    table.float('atwiymneub');
    table.integer('udapzxnnxd');
  });
  await knex.schema.alterTable('krfhmrfxyq', function(table) {
    table.json('oiubrdjupa');
    table.string('hloigyipjv');
    table.string('cklkybzzdg');
    table.text('xgqpdoyzbd');
    table.timestamp('oxzwhwqlxl');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};