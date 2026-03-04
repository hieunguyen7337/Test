'use strict';

/**
 * Migration: 20241016144210_mldphlvbuxxfcys
 * Description: Redo the undo
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fayvrbfwxd', function(table) {
    table.float('cqqloevjqm');
    table.text('xsofdqwjvz');
    table.bigInteger('stkloypmal');
    table.timestamp('ydruprvntm');
    table.json('ntzwfavitn');
  });
  await knex.schema.alterTable('lzxdfgtoat', function(table) {
    table.json('vmrmiigtcb');
    table.bigInteger('ineqdhgmcv');
    table.timestamp('oklipkwune');
    table.bigInteger('khewdqqtcl');
    table.text('bvpzeltyap');
    table.string('prcpuiguqm');
    table.integer('uvhwwrgmlq');
    table.json('fduswkgqwy');
  });
  await knex.schema.alterTable('jgmogieuvr', function(table) {
    table.bigInteger('ltvodulfcx');
    table.integer('dsptbtcgmj');
    table.string('mtaytwuxos');
    table.integer('spyczfroal');
    table.timestamp('crsqcpbcba');
    table.text('llcvxuzlbs');
    table.float('wztfsewnbe');
  });
  await knex.schema.alterTable('wyllydxxci', function(table) {
    table.integer('dptxzjxdxh');
    table.bigInteger('atfxwhuohg');
    table.string('isjurxytpc');
    table.boolean('slvngzzdfo');
    table.bigInteger('tbnapropis');
    table.json('fsdkxgxasy');
  });
  await knex.schema.alterTable('itklbuilvs', function(table) {
    table.bigInteger('ysodqozxsi');
    table.boolean('yeiyaqawfe');
    table.string('zqbajkqmzj');
    table.text('nibzhzhbvo');
    table.boolean('lcyfbzxjxx');
    table.timestamp('eyeyvlzrbs');
    table.string('tfrqaaufjn');
  });
  await knex.schema.alterTable('dwpbrxylft', function(table) {
    table.float('xcwftatjkp');
    table.json('sdspzgzwsp');
    table.integer('frhrnrdcnm');
    table.bigInteger('ictrbsgqat');
    table.string('tybwfcfisr');
    table.boolean('lfuuhyscwc');
    table.float('cqgketnnjz');
    table.boolean('gfmnpqqemp');
  });
  await knex.schema.alterTable('apyddxpbui', function(table) {
    table.integer('mpgfpgbdwn');
    table.float('oqwkvjnguh');
    table.float('gqxtjwwbms');
    table.text('moqxhjglhk');
    table.integer('iukyzlzhfc');
    table.timestamp('sjznycmtgg');
    table.integer('zscprovvzu');
    table.bigInteger('xyilkhzglf');
    table.string('bmgdhcpiha');
  });
  await knex.schema.alterTable('vxgwzwcvwy', function(table) {
    table.timestamp('bkfyoveqoe');
    table.json('tkytlcdlpz');
    table.boolean('ykjluvqheq');
    table.string('bwhjztzuvi');
    table.json('bvfcxzyvyb');
    table.json('frnqdhjxom');
    table.float('vsnazraevw');
    table.bigInteger('cvxcphgpqs');
    table.float('wxvkihwtak');
    table.integer('bdfubdpzqx');
  });
  await knex.schema.alterTable('ggdkgnjdul', function(table) {
    table.text('mzdwbunuaa');
    table.boolean('hfnslfwiwg');
    table.json('qhsmaulyks');
    table.timestamp('kgzlrrvqrm');
    table.float('zrweswelwy');
    table.float('jbxqzkolhw');
    table.bigInteger('wailyhtjrb');
    table.timestamp('pkortswtfs');
    table.boolean('eetotfyzbg');
  });
  await knex.schema.alterTable('otltbylsda', function(table) {
    table.timestamp('imrbgclwug');
    table.bigInteger('guclwlxfof');
    table.timestamp('htjtsvjuqu');
    table.float('lisclwnetp');
    table.timestamp('xpvvfrxded');
    table.boolean('xmczgbkrlo');
    table.float('rmtiuwqyxq');
    table.boolean('vvhnsayeui');
    table.json('metdyyhymn');
  });
  await knex.schema.alterTable('sfhyrmrawp', function(table) {
    table.boolean('tdmtupcnml');
    table.string('phgejqaooi');
    table.string('kogmuzyvvh');
  });
  await knex.schema.alterTable('crlwsgobzk', function(table) {
    table.boolean('jkmqmmckhb');
    table.timestamp('rhzzgxiopm');
    table.boolean('orusfdloqu');
    table.json('aqojxxcknb');
    table.text('hjjfpnxzxc');
    table.bigInteger('ylenufndjk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};