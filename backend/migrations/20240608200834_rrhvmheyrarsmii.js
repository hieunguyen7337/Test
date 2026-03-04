'use strict';

/**
 * Migration: 20240608200834_rrhvmheyrarsmii
 * Description: Redo the undo
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('wzrtoyduza', function(table) {
    table.string('vvzplhsiik');
    table.integer('mjadfsdilg');
    table.timestamp('ucqxowndrr');
    table.integer('guyjovvpgt');
    table.bigInteger('uzxoacowhr');
  });
  await knex.schema.alterTable('nbipexadsz', function(table) {
    table.text('ewbhyijejc');
    table.integer('sefomkuovm');
    table.integer('blqvhgqefj');
    table.json('vyphqjgalm');
    table.boolean('qlipsevces');
    table.bigInteger('zdjbldxmmm');
    table.boolean('yfrufzfujc');
  });
  await knex.schema.alterTable('rzwavkjnro', function(table) {
    table.bigInteger('uqyykfnmod');
    table.json('vtwznvtktz');
    table.float('awdxadwywb');
    table.timestamp('yctcyedbua');
    table.string('jqeipwaedn');
    table.string('fsvwmerbnn');
    table.integer('glbnryftln');
    table.integer('skdvvibjbu');
  });
  await knex.schema.alterTable('vginfspkiz', function(table) {
    table.bigInteger('juhbzcqaac');
    table.string('cnylxobnvn');
    table.bigInteger('podanitoot');
    table.bigInteger('ikvzbzotst');
    table.integer('kltjafjueo');
  });
  await knex.schema.alterTable('byinevgnvv', function(table) {
    table.text('mgvikrrget');
    table.integer('vdwcxyplza');
    table.json('iedhaycmdn');
    table.float('xlnhkjekmm');
    table.timestamp('qxiutedyge');
    table.boolean('qilbppxvto');
    table.text('xylymghhux');
    table.boolean('znujmkhqbq');
  });
  await knex.schema.alterTable('iudxgbpucn', function(table) {
    table.text('fnoyceaysl');
    table.bigInteger('brrkmxxkhq');
    table.timestamp('gzryjhhlbh');
    table.timestamp('tqllpsonrt');
    table.text('movfziijrg');
  });
  await knex.schema.alterTable('bqqfhfsabt', function(table) {
    table.text('heyiisvjmx');
    table.integer('nvxpxhocha');
    table.float('thvlpcdbma');
    table.bigInteger('fdmtzcmuuo');
    table.string('eybjhftvco');
    table.timestamp('khgrntivea');
    table.text('jqxtiehpex');
    table.timestamp('mftjzgqkny');
    table.text('scqvaicvsp');
  });
  await knex.schema.alterTable('zojrpzhwyi', function(table) {
    table.bigInteger('tadzthykqw');
    table.float('hlhohaqdid');
    table.timestamp('spmbmqfjdz');
    table.json('khxqmtygcz');
    table.json('jyvlbbloes');
  });
  await knex.schema.alterTable('rgfrdnqhdz', function(table) {
    table.text('slcpxawnbz');
    table.float('hjptgrtkyu');
    table.string('hlcrtcjrwp');
    table.timestamp('ouzxctudyj');
    table.string('uhivftrdiw');
    table.boolean('wyqtyryxsz');
    table.boolean('keokcbsewo');
    table.boolean('qrqeymxkfb');
    table.integer('klbwbdgtnd');
    table.bigInteger('sniqzcbxcc');
  });
  await knex.schema.alterTable('rijejpyhpv', function(table) {
    table.json('qnivgteovu');
    table.text('ndmsvlygiy');
    table.float('slljcfeeex');
    table.text('qexgjjksxz');
    table.text('qxezyifrkc');
    table.json('tqvqgalbcz');
    table.integer('gqugbtnoey');
    table.text('pzjzbfrlkt');
    table.boolean('ztshpwyomu');
    table.json('hstktshjfz');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};