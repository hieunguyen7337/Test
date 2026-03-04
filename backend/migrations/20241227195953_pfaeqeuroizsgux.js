'use strict';

/**
 * Migration: 20241227195953_pfaeqeuroizsgux
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('dpexsxxsbf', function(table) {
    table.string('zlybvmkxfc');
    table.boolean('ykwgfhvnjq');
    table.integer('ancdouwgel');
    table.json('czzashbrox');
    table.bigInteger('kpgkbudepm');
  });
  await knex.schema.alterTable('uhcgnevjny', function(table) {
    table.timestamp('slufwgjplf');
    table.string('eabgfqhzrt');
    table.boolean('aiifptowrq');
    table.timestamp('veerbuyfcv');
    table.integer('jwqhajaoez');
    table.json('gqkirvrchr');
  });
  await knex.schema.alterTable('rxstjxsbkq', function(table) {
    table.string('aniuzvjrgg');
    table.boolean('ipbmbvblyz');
    table.bigInteger('quhmtnoado');
    table.text('zpxpjhedzh');
    table.bigInteger('vbmqnrszql');
    table.timestamp('tdvocpdqdj');
    table.string('wzxztfemnf');
  });
  await knex.schema.alterTable('dafwiogdkd', function(table) {
    table.string('kpfkegjjzb');
    table.boolean('busmawpely');
    table.bigInteger('sjxegkhqot');
    table.float('pxqkahmliy');
    table.string('tkbnpcvalw');
    table.json('jvewpkslqp');
    table.text('rnbwwmmfph');
    table.integer('ptnqtlstaw');
  });
  await knex.schema.alterTable('dlsnaqnxvv', function(table) {
    table.json('dztytjgcmy');
    table.timestamp('ldhljtnayq');
    table.text('cbzpvfljot');
    table.text('dwvnhaibmr');
    table.integer('qqundadeze');
    table.text('qhcujthtnl');
    table.float('vlwnffgmnx');
    table.string('hbqtnewwwv');
    table.float('xxqsxvfovi');
    table.timestamp('ijghlesbzu');
  });
  await knex.schema.alterTable('hubdjyiwek', function(table) {
    table.float('kwluzuqoip');
    table.string('aefjxzmfxn');
    table.timestamp('iplrjvzfoq');
    table.boolean('ubcpedtotx');
    table.string('atlfzqqwfv');
    table.timestamp('qkomxvyyhz');
    table.float('wveesulfmk');
  });
  await knex.schema.alterTable('wbgtixowzh', function(table) {
    table.timestamp('tndjtdonbx');
    table.text('rqqvfpknun');
    table.string('kxogsdzwja');
  });
  await knex.schema.alterTable('icdelibgoh', function(table) {
    table.json('twaatlfvqj');
    table.string('auhwrghseh');
    table.string('lakfwlbsfr');
    table.timestamp('dxibfxcuvu');
    table.json('ftaflxombz');
  });
  await knex.schema.alterTable('lqzovityvd', function(table) {
    table.text('hjbqjbjkth');
    table.float('ssefbxtszq');
    table.timestamp('rbmqbjrhwr');
    table.bigInteger('ldzflmyccr');
    table.integer('ijndupdktm');
    table.boolean('uerhzfwjcu');
    table.integer('boroogwdrp');
    table.json('emywcugxcm');
    table.boolean('jagtjbgktp');
    table.text('xhhuhufetc');
  });
  await knex.schema.alterTable('mskvsfawic', function(table) {
    table.json('tenzmhgnuc');
    table.boolean('sdkyzbftrm');
    table.text('kxtftsmvrw');
    table.json('ngdwgjmmmw');
    table.float('rgwhdxosyv');
    table.text('qqnzewwsmx');
    table.string('skhgkusmzv');
  });
  await knex.schema.alterTable('tygbdrdvtr', function(table) {
    table.timestamp('eynvyqllnb');
    table.json('ugweieqavu');
    table.timestamp('rkoqrddtuh');
    table.json('xknoztdacv');
    table.string('tvyuitaqxi');
    table.float('vmqezqzwvq');
    table.float('wncauimmqu');
  });
  await knex.schema.alterTable('fomkhkejxc', function(table) {
    table.float('cfwrcrdcic');
    table.json('pvtwcmkdrw');
    table.bigInteger('ignstxfwbq');
    table.json('asmuukwyyk');
    table.text('bhdzlqwrav');
    table.float('zoodvsgcat');
    table.integer('rufujdmwqz');
  });
  await knex.schema.alterTable('zdaymbfbzs', function(table) {
    table.json('ruzgbevfzs');
    table.integer('gduyuipcrh');
    table.text('yqimyhmpyk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};